import React, { useMemo, useState } from 'react';
import {
  Card,
  Col,
  Form,
  Input,
  InputNumber,
  Row,
  Select,
  Space,
  Tag,
} from 'antd';
import { DebounceSelect } from 'components/search';
import TextArea from 'antd/es/input/TextArea';
import { shallowEqual, useSelector } from 'react-redux';
import Map from 'components/map';
import { useTranslation } from 'react-i18next';
import MediaUpload from 'components/upload';
import shopTagService from 'services/shopTag';
import { ShopTypes } from 'constants/shop-types';
import { SHOP_EMAIL_STATUSES } from 'constants/index';
import { useParams } from 'react-router-dom';
import { FileOutlined } from '@ant-design/icons';
import AddressForm from 'components/forms/address-form';
import { deliveryTimeTypes } from './delivery-time-types';

const ShopAddData = ({
  logoImage,
  setLogoImage,
  backImage,
  setBackImage,
  form,
  location,
  setLocation,
}) => {
  const { t } = useTranslation();
  const { uuid } = useParams();
  const { defaultLang, languages } = useSelector(
    (state) => state.formLang,
    shallowEqual,
  );
  const { activeMenu } = useSelector((state) => state.menu, shallowEqual);

  const [value, setValue] = useState('');

  const sellerDocuments = activeMenu?.data?.documents || [];

  const emailStatusOptions = useMemo(
    () =>
      SHOP_EMAIL_STATUSES.map((item) => ({
        label: t(item),
        value: item,
        key: item,
      })),
    [uuid],
  );

  async function fetchShopTag(search) {
    const params = { search };
    return shopTagService.getAllSeller(params).then(({ data }) =>
      data?.map((item) => ({
        label: item?.translation?.title || t('no.name'),
        value: item?.id,
        key: item?.id,
      })),
    );
  }

  return (
    <Row gutter={12}>
      <Col span={24}>
        <Card>
          <Row gutter={12}>
            <Col span={4}>
              <Form.Item label={t('logo.image')}>
                <MediaUpload
                  type='shops/logo'
                  imageList={logoImage}
                  setImageList={setLogoImage}
                  form={form}
                  multiple={false}
                  name='logo_img'
                />
              </Form.Item>
            </Col>
            <Col span={4}>
              <Form.Item label={t('background.image')}>
                <MediaUpload
                  type='shops/background'
                  imageList={backImage}
                  setImageList={setBackImage}
                  form={form}
                  multiple={false}
                  name='background_img'
                />
              </Form.Item>
            </Col>
            <Col span={10}>
              <Form.Item label={t('status.note')} name='status_note'>
                <TextArea rows={4} />
              </Form.Item>
            </Col>
            <Col span={4}>
              <Form.Item name='status' label={t('status')}>
                <Input disabled />
              </Form.Item>
            </Col>
          </Row>
        </Card>
      </Col>

      <Col span={24}>
        <Card title={t('general')}>
          <Row gutter={12}>
            <Col span={12}>
              <Row gutter={12}>
                <Col span={24}>
                  {languages.map((item, idx) => (
                    <Form.Item
                      key={'title' + idx}
                      label={t('title')}
                      name={`title[${item.locale}]`}
                      rules={[
                        {
                          required: item.locale === defaultLang,
                          message: t('required'),
                        },
                        { min: 2, message: t('title.required') },
                      ]}
                      hidden={item.locale !== defaultLang}
                    >
                      <Input />
                    </Form.Item>
                  ))}
                </Col>
                <Col span={24}>
                  <Form.Item
                    label={t('phone')}
                    name='phone'
                    rules={[{ required: true, message: t('required') }]}
                  >
                    <InputNumber min={0} className='w-100' />
                  </Form.Item>
                </Col>
              </Row>
            </Col>

            <Col span={12}>
              {languages.map((item, idx) => (
                <Form.Item
                  key={'desc' + idx}
                  label={t('description')}
                  name={`description[${item.locale}]`}
                  rules={[
                    {
                      required: item.locale === defaultLang,
                      message: t('required'),
                    },
                    { min: 3, message: t('required') },
                  ]}
                  hidden={item.locale !== defaultLang}
                >
                  <TextArea rows={4} />
                </Form.Item>
              ))}
            </Col>

            <Col span={12}>
              <Form.Item
                label={t('shop.tags')}
                name='tags'
                rules={[{ required: false, message: t('required') }]}
              >
                <DebounceSelect
                  mode='multiple'
                  fetchOptions={fetchShopTag}
                  style={{ minWidth: 150 }}
                />
              </Form.Item>
            </Col>

            <Col span={12}>
              <Form.Item
                label={t('shop.type')}
                name='delivery_type'
                rules={[{ required: true, message: t('required') }]}
              >
                <Select options={ShopTypes} />
              </Form.Item>
            </Col>

            <Col span={12} hidden>
              <Form.Item
                label={t('seller')}
                name='user'
                rules={[{ required: true, message: t('required') }]}
              >
                <Input />
              </Form.Item>
            </Col>
            {!!sellerDocuments?.length && (
              <Col span={12}>
                <Form.Item label={t('uploaded.documents.for.verification')}>
                  <Space gap='4px 0' wrap>
                    {sellerDocuments?.map((item) => (
                      <a
                        href={item?.path}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <Tag icon={<FileOutlined />}>{item?.title}</Tag>
                      </a>
                    ))}
                  </Space>
                </Form.Item>
              </Col>
            )}
          </Row>
        </Card>
      </Col>
      <Col span={12}>
        <Card title={t('delivery.time')}>
          <Row gutter={12}>
            <Col span={12}>
              <Form.Item
                name='delivery_time_type'
                label={t('delivery_time_type')}
                rules={[{ required: true, message: t('required') }]}
              >
                <Select className='w-100'>
                  {deliveryTimeTypes.map((item) => (
                    <Select.Option
                      key={item.value}
                      value={item.value}
                      label={t(item.label)}
                    />
                  ))}
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name='delivery_time_from'
                label={t('delivery_time_from')}
                rules={[{ required: true, message: t('required') }]}
              >
                <InputNumber className='w-100' />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name='delivery_time_to'
                label={t('delivery_time_to')}
                rules={[{ required: true, message: t('required') }]}
              >
                <InputNumber className='w-100' />
              </Form.Item>
            </Col>
          </Row>
        </Card>
      </Col>
      <Col span={12}>
        <Card title={t('order.info')}>
          <Row gutter={12}>
            <Col span={12}>
              <Form.Item
                label={t('tax')}
                name='tax'
                rules={[{ required: true, message: t('required') }]}
              >
                <InputNumber min={0} addonAfter={'%'} className='w-100' />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name='emailStatuses' label={t('email.statuses')}>
                <Select
                  mode='multiple'
                  labelInValue
                  options={emailStatusOptions}
                />
              </Form.Item>
            </Col>
          </Row>
        </Card>
      </Col>

      <Col span={24}>
        <Card title={t('address')}>
          <Row gutter={12}>
            <Col span={24}>
              <AddressForm
                value={value}
                setValue={setValue}
                setLocation={setLocation}
              />
            </Col>
            <Col span={24}>
              <Map
                location={location}
                setLocation={setLocation}
                setAddress={(value) =>
                  form.setFieldsValue({ [`address[${defaultLang}]`]: value })
                }
              />
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  );
};

export default ShopAddData;
