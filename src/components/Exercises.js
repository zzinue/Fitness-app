import React, { useEffect, useState } from 'react'
import Pagination from '@mui/material/Pagination'
import { Box, Stack, Typography } from '@mui/material'
import { exercisesOptions, fetchData } from '../utils/fetchData'
import ExercisesCard from './ExercisesCard'

const Exercises = ({ exercises, setExercises, bodyPart }) => {
    const [currentPage, setCurrentPage] = useState(1)
    const exercisesPerPage = 9
    const indexOfLastExercise = currentPage * exercisesPerPage
    const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage
    const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise)
    const paginate = (e, value) => {
        setCurrentPage(value)
        window.scrollTo({ top: 1800, behavior: 'smooth' })
    }
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
                {currentExercises.map((exercise, index) => (
                    <ExercisesCard key={index} exercise={exercise} />
                ))}
            </Stack>
            <Stack mt="100px" alignItems="center">
                {exercises.length > 9 && (
                    <Pagination color="secondary" shape="rounded" defautPage={1}
                        count={Math.ceil(exercises.length / exercisesPerPage)}
                        page={currentPage}
                        onChange={paginate}
                        size="large"
                    />
                )}

            </Stack>

        </Box>
    )
}

export default Exercises