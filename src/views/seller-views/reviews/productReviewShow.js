import React, { useEffect, useState } from 'react';
import { Button, Col, Descriptions, Image, Modal, Row } from 'antd';
import { useTranslation } from 'react-i18next';
import Loading from '../../../components/loading';
import reviewService from '../../../services/seller/review';
import getImage from '../../../helpers/getImage';
import moment from 'moment';
import { getHourFormat } from '../../../helpers/getHourFormat';

export default function SellerProductReviewShowModal({ id, handleCancel }) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation();
  const hourFormat = getHourFormat();

  function fetchReviews(id) {
    setLoading(true);
    reviewService
      .getById(id)
      .then((res) => setData(res.data))
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    fetchReviews(id);
  }, [id]);

  return (
    <Modal
      visible={!!id}
      title={t('product.review')}
      onCancel={handleCancel}
      footer={
        <Button type='default' onClick={handleCancel}>
          {t('cancel')}
        </Button>
      }
    >
      {!loading ? (
        <Descriptions bordered>
          <Descriptions.Item span={3} label={t('id')}>
            {data.id}
          </Descriptions.Item>
          <Descriptions.Item span={3} label={t('user')}>
            {data.user?.firstname} {data.user?.lastname || ''}
          </Descriptions.Item>
          <Descriptions.Item span={3} label={t('rating')}>
            {data.rating}
          </Descriptions.Item>
          <Descriptions.Item span={3} label={t('image')}>
            <Row gutter={12}>
              {data?.galleries?.length
                ? data?.galleries?.map((item) => (
                    <Col>
                      <Image
                        width={145}
                        height={100}
                        src={getImage(item.path)}
                        placeholder
                        className='rounded'
                        style={{ objectFit: 'contain' }}
                        preview={false}
                      />
                    </Col>
                  ))
                : t('no.image')}
            </Row>
          </Descriptions.Item>
          <Descriptions.Item span={3} label={t('product.id')}>
            {data?.product?.id}
          </Descriptions.Item>
          <Descriptions.Item span={3} label={t('comment')}>
            {data?.comment}
          </Descriptions.Item>
          <Descriptions.Item span={3} label={t('created.at')}>
            {moment(data?.created_at).format(`YYYY-MM-DD ${hourFormat}`)}
          </Descriptions.Item>
        </Descriptions>
      ) : (
        <Loading />
      )}
    </Modal>
  );
}
