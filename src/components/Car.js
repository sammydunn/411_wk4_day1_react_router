import React from 'react'
import cars from '../cars.json'
// import material ui components here //
import { Chip,Paper,Container } from '@material-ui/core'
// Container, Paper, Chip //

const Car = (props) => {
    const id = +props.match.params.id
    let thisCar = cars.find(car => car.id === +id)
    
    return (
        <Container className="conatiner" maxWidth='sm'>
        <Paper className="paper" variant="outlined">
            <h1>{thisCar.Name.toUpperCase()}</h1>
                {
                    Object.keys(thisCar).map((key, idx) => {
                        return <Chip key= {idx} label={`${key}: ${thisCar[key]}`} />
                    })
                }
            </Paper>
        </Container>
    )
}

export default Car