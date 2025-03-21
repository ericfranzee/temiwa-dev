import React, { useRef, useState } from 'react';
import { Button, Card, Col, DatePicker, Form, Input, Row, Select } from 'antd';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import moment from 'moment';
import { getCartData } from 'redux/selectors/cartSelector';
import { setCartData } from 'redux/slices/cart';
import { DebounceSelect } from 'components/search';
import deliveryPointService from 'services/delivery-point';
import useDidUpdate from 'helpers/useDidUpdate';
import deliveryPriceService from 'services/delivery-price';
import { toast } from 'react-toastify';
import addressService from '../../../../services/deliveryzone/addres';
import { PlusCircleOutlined } from '@ant-design/icons';
import DeliveryUserModal from './delivery-user-modal';
import { getHourFormat } from '../../../../helpers/getHourFormat';

const DeliveryInfo = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const data = useSelector((state) => getCartData(state.cart));
  const { myShop: shop } = useSelector((state) => state.myShop, shallowEqual);
  const { currentBag } = useSelector((state) => state.cart, shallowEqual);
  const using_12_hour_format = useSelector(
    (state) => state.globalSettings?.settings?.using_12_hour_format,
    shallowEqual,
  );
  const cartData = useSelector((state) => getCartData(state.cart));
  const [userAddressModal, setUserAddressModal] = useState(null);
  const filter = shop?.shop_closed_date?.map((date) => date.day);
  const addressesList = useRef([]);
  const hourFormat = getHourFormat();

  function disabledDate(current) {
    const a = filter?.find(
      (date) => date === moment(current).format('YYYY-MM-DD'),
    );
    const b = moment().add(-1, 'days') >= current;
    if (a) {
      return a;
    } else {
      return b;
    }
  }

  const range = (start, end) => {
    const x = parseInt(start);
    const y = parseInt(end);
    const number = [
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
      21, 22, 23, 24,
    ];
    for (let i = x; i <= y; i++) {
      delete number[i];
    }
    return number;
  };

  const disabledDateTime = () => ({
    disabledHours: () =>
      range(
        moment(cartData?.delivery_date).format('YYYYMMDD') ===
          moment(new Date()).format('YYYYMMDD')
          ? moment(new Date()).add(1, 'hour').format('HH')
          : 0,
        24,
      ),
    disabledMinutes: () => [],
    disabledSeconds: () => [],
  });

  const fetchUserAddresses = (search) => {
    const params = {
      search,
      perPage: 10,
      page: 1,
    };

    return addressService.getAll(params).then(({ data }) => {
      addressesList.current = data;
      return data?.map((item) => ({
        label: item?.title || item.location?.address,
        value: item?.id,
        key: item?.id,
      }));
    });
  };

  const fetchDeliveryPoints = (search) => {
    const params = {
      search,
      perPage: 10,
      page: 1,
    };

    return deliveryPointService.get(params).then(({ data }) =>
      data?.flatMap((item) => ({
        label: item?.translation?.title,
        value: item?.id,
        key: item?.id,
      })),
    );
  };

  const delivery = [
    {
      label: t('delivery'),
      value: 'delivery',
      key: 1,
    },
    {
      label: t('pickup'),
      value: 'point',
      key: 0,
    },
  ];

  const setDeliveryPrice = (delivery) =>
    dispatch(
      setCartData({ delivery_type: delivery.value, bag_id: currentBag }),
    );

  const goToAddUserDeliveryAddress = () => {
    if (!data.userUuid) {
      toast.warning(t('please.select.client'));
      return;
    }
    setUserAddressModal(data.userUuid);
  };

  useDidUpdate(() => {
    if (
      cartData?.deliveryAddress?.country_id &&
      cartData?.deliveryAddress?.city_id
    ) {
      const body = {
        country_id: cartData?.deliveryAddress?.country_id,
        city_id: cartData?.deliveryAddress?.city_id,
      };
      deliveryPriceService.get(body).then(({ data }) => {
        dispatch(
          setCartData({ delivery_price_id: data?.[0]?.id, bag_id: currentBag }),
        );
      });
    }
  }, [
    cartData?.deliveryAddress?.country_id,
    cartData?.deliveryAddress?.city_id,
  ]);

  return (
    <Card title={t('shipping.info')} className='p-0'>
      <Row gutter={12}>
        <Col span={24}>
          <Form.Item
            name='delivery'
            label={t('delivery')}
            rules={[{ required: true, message: t('required') }]}
          >
            <Select
              placeholder={t('delivery.type')}
              options={delivery}
              labelInValue
              onSelect={setDeliveryPrice}
              onChange={(deliveries) =>
                dispatch(
                  setCartData({
                    deliveries,
                    bag_id: currentBag,
                  }),
                )
              }
            />
          </Form.Item>
        </Col>
        {cartData?.deliveries?.key === 1 && (
          <>
            <Col span={21}>
              <Form.Item
                name='address'
                label={t('address')}
                rules={[
                  {
                    required: true,
                    message: t('required'),
                  },
                ]}
              >
                <DebounceSelect
                  fetchOptions={fetchUserAddresses}
                  placeholder={t('select.address')}
                  allowClear={false}
                  onChange={(e) => {
                    if (e === undefined)
                      return dispatch(
                        setCartData({
                          bag_id: currentBag,
                          address: '',
                          deliveryAddress: null,
                        }),
                      );

                    const selectedAddress = addressesList.current.find(
                      (item) => item.id === e.value,
                    );
                    dispatch(
                      setCartData({
                        bag_id: currentBag,
                        address: e,
                        phone: selectedAddress.phone,
                        deliveryAddress: {
                          address: selectedAddress.location?.address,
                          country_id: selectedAddress?.country_id,
                          city_id: selectedAddress?.city_id,
                          street_house_number:
                            selectedAddress?.street_house_number,
                          zip_code: selectedAddress?.zipcode,
                          location: selectedAddress?.location,
                        },
                      }),
                    );
                  }}
                  autoComplete='none'
                />
              </Form.Item>
            </Col>
            <Col span={3}>
              <Form.Item label=' '>
                <Button
                  icon={<PlusCircleOutlined />}
                  onClick={goToAddUserDeliveryAddress}
                />
              </Form.Item>
            </Col>
          </>
        )}
        {cartData?.deliveries?.key === 0 && (
          <Col span={24}>
            <Form.Item
              name='delivery_point'
              label={t('delivery.point')}
              rules={[{ required: true, message: t('required') }]}
            >
              <DebounceSelect
                fetchOptions={fetchDeliveryPoints}
                placeholder={t('select.delivery.point')}
                onChange={(delivery_point) => {
                  dispatch(
                    setCartData({
                      delivery_point,
                      bag_id: currentBag,
                    }),
                  );
                }}
              />
            </Form.Item>
          </Col>
        )}
        <Col span={24}>
          <Row gutter={12}>
            <Col span={12}>
              <Form.Item
                name='delivery_date'
                label={t('delivery.date')}
                rules={[
                  {
                    required: true,
                    message: t('required'),
                  },
                ]}
                // valuePropName={'date'}
              >
                <DatePicker
                  placeholder={t('delivery.date')}
                  className='w-100'
                  format='YYYY-MM-DD'
                  disabledDate={disabledDate}
                  allowClear={false}
                  onChange={(e) => {
                    const delivery_date = moment(e).format('YYYY-MM-DD');
                    dispatch(
                      setCartData({
                        delivery_date,
                        bag_id: currentBag,
                      }),
                    );
                  }}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label={`${t('delivery.time')} (${t('up.to')})`}
                name='delivery_time'
                rules={[
                  {
                    required: true,
                    message: t('required'),
                  },
                ]}
                // valuePropName='date'
              >
                <DatePicker
                  disabled={!data.delivery_date}
                  picker='time'
                  placeholder={t('start.time')}
                  className='w-100'
                  format={hourFormat}
                  use12Hours={using_12_hour_format === '1'}
                  showNow={false}
                  allowClear={false}
                  disabledTime={disabledDateTime}
                  onChange={(e) => {
                    const delivery_time = moment(e).format('HH:mm');
                    dispatch(
                      setCartData({ delivery_time, bag_id: currentBag }),
                    );
                  }}
                />
              </Form.Item>
            </Col>
          </Row>
        </Col>
      </Row>
      {userAddressModal && (
        <DeliveryUserModal
          visible={userAddressModal}
          handleCancel={() => setUserAddressModal(null)}
        />
      )}
    </Card>
  );
};

export default DeliveryInfo;
