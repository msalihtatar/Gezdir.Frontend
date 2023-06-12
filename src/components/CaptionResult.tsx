import React from 'react'
import { Card } from 'react-bootstrap'

type Props = {caption:string}

const CaptionResult = (props: Props) => {
  return (
    <Card>
        <Card.Body>
            {props.caption}
        </Card.Body>
    </Card>
  )
}

export default CaptionResult