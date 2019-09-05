import React from 'react'
import PropTypes from 'prop-types'
import { Tooltip, Button } from 'antd'

const TooltipButton = props => {
  const { children, tip, placement, icon,...restProps } = props
  return (
    <Tooltip title={tip} placement={placement}>
      <Button icon={icon} {...restProps}>{children}</Button>
    </Tooltip>
  )
}

TooltipButton.propTypes = {
  tip: PropTypes.string.isRequired,
  placement: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
}

TooltipButton.defaultProps = {
  placement: 'top'
}

export default TooltipButton
