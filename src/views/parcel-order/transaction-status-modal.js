import React, { useState } from 'react';
import { Button, Col, Form, Modal, Row, Select } from 'antd';

import { useTranslation } from 'react-i18next';

import { toast } from 'react-toastify';

import parcelOrderService from '../../services/parcelOrder';

const status = ['paid', 'canceled'];

export default function TransactionStatusModal({
  data,
  handleCancel,
  fetchParcelDetails,
}) {
  const [form] = Form.useForm();
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);

  const onFinish = (values) => {
    setLoading(true);
    parcelOrderService
      .transactionStatus(data?.id, values)
      .then(() => {
        handleCancel();
        fetchParcelDetails();
      })
      .catch((err) => toast.error(err.message))
      .finally(() => setLoading(false));
  };

  return (
    <Modal
      visible={!!data}
      title={t('transaction.status')}
      closable={false}
      footer={[
        <Button
          key='save-form'
          type='primary'
          onClick={() => form.submit()}
          loading={loading}
        >
          {t('save')}
        </Button>,
        <Button key='cansel-modal' type='default' onClick={handleCancel}>
          {t('cancel')}
        </Button>,
      ]}
    >
      <Form
        form={form}
        layout='vertical'
        onFinish={onFinish}
        initialValues={{ status: data?.transaction?.status }}
      >
        <Row gutter={12}>
          <Col span={24}>
            <Form.Item
              label={t('status')}
              name='status'
              rules={[
                {
                  validator(_, value) {
                    if (value === 'paid' || value === 'canceled')
                      return Promise.resolve();
                    return Promise.reject(new Error(t('required')));
                  },
                },
              ]}
            >
              <Select>
                {status.map((item, index) => (
                  <Select.Option key={index} value={item}>
                    {t(item)}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Modal>
  );
}
