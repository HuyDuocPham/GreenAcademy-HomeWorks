import { useState, useEffect } from "react";
import { Button, Modal, Table, Form, Input, InputNumber } from "antd";

const DEFAULT_USER = { name: "", email: "", phone: "" };
const Bai07 = () => {
  const [formData, setFormData] = useState(DEFAULT_USER);
  const [dataSource, setDataSource] = useState([]);
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();

  const onEdit = (item) => {
    setFormData(item);
    setOpen(true);
  };
  const onDelete = (item) => {
    const newDataSource = dataSource.filter((user) => {
      return item.id !== user.id;
    });
    setDataSource(newDataSource);
  }; 
  const onChange = (e) => {
    setFormData({
      ...dataSource,
      [e.target.name]: e.target.value,
    });
  };
  const onCreate = () => {
    setFormData(DEFAULT_USER);
    setOpen(true);
  };
  const onSubmit = (id, data) => {
    if (id) {
      const newDataSource = dataSource.map((item) => {
        return item.id === id ? { id: id, ...data } : item;
      });
      setDataSource(newDataSource);
    } else {
      setDataSource([
        ...dataSource,
        {
          id: Math.random(),
          ...data,
        },
      ]);
      setFormData(DEFAULT_USER);
    }
    setOpen(false);
  };
  const onCancel = () => {
    setOpen(false);
  };

  const columns = [
    {
      title: "Họ và tên",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Số điện thoại",
      dataIndex: "phone",
      key: "phone",
    },
    /** Tất cả table đều có phần này */
    {
      title: "",
      dataIndex: "actions",
      render: (text, item) => {
        return (
          <div>
            <Button
              onClick={() => {
                onEdit(item);
              }}
            >
              Edit
            </Button>
            <Button
              onClick={() => {
                onDelete(item);
              }}
            >
              Delete
            </Button>
          </div>
        );
      },
    },
  ];

  useEffect(() => {
    if (!open) {
      form.resetFields();
    }
  }, [open]);

  useEffect(() => {
    if (open && formData.id) {
      form.setFieldsValue(formData);
    }
  }, [open, formData]);

  const onSubmitModal = async () => {
    const values = await form.validateFields();
    onSubmit(formData.id, values);
  };

  return (
    <div>
      <Button onClick={onCreate}>New User</Button>
      <Modal
        open={open}
        setOpen={setOpen}
        onSubmit={onSubmit}
        onChange={onChange}
        onCancel={onCancel}
        onOk={onSubmitModal}
      >
        <Form form={form} layout="vertical">
          <Form.Item
            name="name"
            label="Họ và tên"
            rules={[{ required: true, message: "Thông tin bắt buộc!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            rules={[
              { required: true, message: "Thông tin bắt buộc!" },
              { type: "email", message: " Email không đúng!" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="phone"
            label="Số điện thoại"
            rules={[{ required: true, message: "Thông tin bắt buộc!" }]}
          >
            <InputNumber />
          </Form.Item>
        </Form>
      </Modal>
      <Table
        columns={columns}
        dataSource={dataSource}
        onEdit={onEdit}
        onDelete={onDelete}
      />
    </div>
  );
};

export default Bai07;
