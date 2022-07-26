import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import CustomSelect from "./components/CustomSelect";
import SelectCompanyRelation from "./components/SelectCompanyRelation";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Form, Button, Input } from "antd";
import SelectCompanyPosition from "./components/SelectCompanyPosition";
const queryClient = new QueryClient();
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 20 },
};
const validateMessages = {
  required: "${label} is required!",
};
function App() {
  const onFinish = (values: any) => {
    alert(JSON.stringify(values));
  };
  // Form.Item implicitly passes {value,onChange} to children
  // needed to coordinate custom components validation error

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Form
          {...layout}
          name="nest-messages"
          onFinish={onFinish}
          validateMessages={validateMessages}
        >
          <Form.Item
            name={["user", "position"]}
            label="Position"
            rules={[{ required: true }]}
          >
            {/* @ts-ignore */}
            <SelectCompanyPosition />
          </Form.Item>

          <Form.Item
            name={["user", "relation"]}
            label="Relation"
            rules={[{ required: true }]}
          >
            {/* @ts-ignore */}
            <SelectCompanyRelation />
          </Form.Item>
          <Form.Item
            className="Input"
            rules={[
              { required: true },
              { min: 5, message: "Username must be minimum 5 characters." },
              { max: 10, message: "Username must be maximum 10 characters." },
            ]}
            name={["user", "name"]}
            label="Name"
          >
            <Input />
          </Form.Item>
          <Form.Item
            rules={[
              { required: true },
              { min: 5, message: "Introduction must be minimum 5 characters." },
              {
                max: 10,
                message: "Introduction must be maximum 10 characters.",
              },
            ]}
            name={["user", "introduction"]}
            label="Introduction"
          >
            <Input.TextArea />
          </Form.Item>
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </QueryClientProvider>
  );
}

export default App;
