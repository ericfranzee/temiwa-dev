import React, { useContext } from 'react';
import { Form } from 'antd';
import { BookingContext } from '../provider';
import InfoFormItems from '../forms/info-form';
import bookingService from 'services/booking';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { fetchBookingList } from 'redux/slices/booking';

const InfoForm = () => {
  const {
    infoForm,
    setCalculatedData,
    selectedSlots,
    calculatedData,
    setViewContent,
  } = useContext(BookingContext);
  const dispatch = useDispatch();
  const client = Form.useWatch('client', infoForm);
  const payment_id = Form.useWatch('payment_id', infoForm);

  const onFinish = (values) => {
    bookingService
      .create({
        user_id: values.client.value,
        payment_id: values.payment_id.value,
        data: calculatedData?.items.map((item) => ({
          note: item?.note?.length ? item?.note : undefined,
          data: item.data,
          service_master_id: item?.service_master?.id,
          service_extras: item?.extras?.length
            ? item?.extras?.map((item) => item?.id)
            : undefined,
          start_date: item.start_date,
        })),
        //  start_date: moment(selectedSlots?.start).format('YYYY-MM-DD HH:mm'),
      })
      .then(() => {
        setViewContent('');
        setCalculatedData({});
        infoForm.resetFields();
        dispatch(fetchBookingList());
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <Form form={infoForm} layout='vertical' onFinish={onFinish}>
      <InfoFormItems isAdd isDisabled={!(client && payment_id)} />
    </Form>
  );
};

export default InfoForm;
