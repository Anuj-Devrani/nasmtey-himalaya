import React from 'react'
import cx from 'classnames'

interface Props {
  className?: string
  name: string
}

const Icon = ({ className, name }: Props) => (
  <i className={cx('material-icons', className)}>{name}</i>
)

export default Icon
