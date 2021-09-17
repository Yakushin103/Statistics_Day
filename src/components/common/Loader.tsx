import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

import Portal from '@material-ui/core/Portal'
import { RootState } from '../../store/store'
import Spinner from '../../image/Spinner_1.gif'

const Loader = (props: any) => {
  const showLoader = useSelector(({ main }: RootState) => main.showLoader)

  if (!showLoader && !props.show) { return null; }

  return (
    <Portal>
      <StyledLoader src={Spinner} alt="loader" />
    </Portal>
  )
}

const loaderSize = 100;
const StyledLoader = styled.img`
  width: ${loaderSize}px;
  height: ${loaderSize}px;
  position: fixed;
  top: calc(50% - 50px);
  left: calc(50% - 50px);
`;

Loader.propTypes = {
  show: PropTypes.bool,
}

Loader.defaultProps = {
  show: false,
}

export default memo(Loader)