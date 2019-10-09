import React from 'react';
import CodeExample from 'wix-storybook-utils/CodeExample'
import TooltipButtonBasicExample from './ExampleBasic'
import ExampleBasicRaw from  '!raw-loader!./ExampleBasic'
import readme from './README.md'
import css from "@emotion/css"

import { Row, Col, Card } from 'antd'

const exampleContainerStyle = {
    display: 'flex',
    backgroundColor: '#f6f8fa',
    minHeight: '50px',
    alignItems: 'center',
    justifyContent: 'center',
  }

const renderComponents = () =>{
  return(
    <TooltipButtonBasicExample/>
  )
}
const component = () => (
    <Row gutter={16}>
      <Col span={12} >
        <Card title={renderComponents() } className={css`
        .markdown-body pre{
          text-align:left;
        }
        `}
        actions={[<CodeExample  code={ExampleBasicRaw} />]}>
          Standard with icons
        </Card>
      </Col>
      <Col span={12}>
        <Card title={renderComponents()} actions={[<CodeExample code={ExampleBasicRaw}/>]}>
            Standard with icons
          </Card>
      </Col>
    </Row>
)

export default [readme, component]
