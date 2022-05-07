import React from 'react'
import { Button } from "react-bootstrap";
import Grid from "@material-ui/core/Grid";


export default function Selectcard() {
  return (
      
    <div >
      <Grid container justify="center">
        <Button  href= "creditcard">Credit card </Button><br/>
      <Button href="debitcard">Debit card </Button>
      </Grid>
    </div>
  )
}
