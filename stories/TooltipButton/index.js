import React from 'react'
import CodeExample from 'wix-storybook-utils/CodeExample'
import TooltipButtonBasicExample from './ExampleBasic'
import ExampleBasicRaw from  '!raw-loader!./ExampleBasic'
import css from "react-emotion"

import { Row, Col, Card } from 'antd'


const renderComponents = () =>{
  return(
    <TooltipButtonBasicExample/>
  )
}
export const TooltipButtonExample=(
    <Row gutter={16} >
      <Col span={12}>
        <Card title={renderComponents()} className={css`
        .ant-card-actions > li{
          text-align:ubset;
        }`} 
        actions={[<CodeExample  code={ExampleBasicRaw} />]}>
        </Card>
      </Col>
      <Col span={12}>
        <Card title={renderComponents()} actions={[<CodeExample code={ExampleBasicRaw}/>]}>
            Standard with icons
          </Card>
      </Col>
    </Row>
)
