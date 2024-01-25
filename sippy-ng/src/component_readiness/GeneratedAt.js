import { Box, Button, Tooltip, Typography } from '@mui/material'
import { relativeTime } from '../helpers'
import PropTypes from 'prop-types'
import React from 'react'

export default function GeneratedAt(props) {
  if (!props.time) {
    return <></>
  }

  const d = new Date(props.time)

  return (
    <Box align="right">
      <Typography variant="caption">
        <Tooltip title={props.time}>
          Generated {relativeTime(d, new Date())}
        </Tooltip>
      </Typography>
    </Box>
  )
}

GeneratedAt.propTypes = {
  time: PropTypes.string,
}
