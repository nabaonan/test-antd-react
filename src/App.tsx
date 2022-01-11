import { Fragment, useRef } from "react";
import { Col, Button } from "antd";
import { Test } from "@components/test";
import DrawerForm from './components/DrawerForm'
const App = () => {

  const drawer = useRef<{
    show: (data?: Record<string, string>) => void
  }>();
  const add = () => {
    console.log('添加')
    if (drawer && drawer.current) {
      drawer.current.show()

    }
  }
  const edit = () => {
    drawer.current.show({
      type: '123123',
      owner: '33333'
    })
  }

  return (
    <Fragment>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <div>
          <h1>Hello AsurRaa</h1>
          <Button onClick={add}>添加</Button>
          <Button onClick={edit}>编辑</Button>
          <Col></Col>
        </div>


      </div>
      <DrawerForm ref={drawer} ></DrawerForm>
    </Fragment>
  );
};

export default App;
