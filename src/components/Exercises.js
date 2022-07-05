import React, { useEffect, useState } from 'react'
// import Pagination from '@mui/material/pagination'
import { Box, Stack, Typography } from '@mui/material'
import { exercisesOptions, fetchData } from '../utils/fetchData'
import ExercisesCard from './ExercisesCard'

const Exercises = ({ exercises, setExercises, bodyPart }) => {
    console.log(exercises)
    return (
        <Box id="exercises"
            sx={{ mt: { lg: '11px' } }}
            mt='5px'
            p='20px'
        >
            <Typography variant="h3" mb="46px">
                Showing Results
            </Typography>
            <Stack direction="row"
                sx={{
                    gap: { lg: '110px', xs: '50px' }
                }}
                flexWrap="wrap" justifyContent='center'>
                {exercises.map((exercise, index) => (
                    <ExercisesCard key={index} exercise={exercise} />
                ))}
            </Stack>

        </Box>
    )
}

export default Exercises