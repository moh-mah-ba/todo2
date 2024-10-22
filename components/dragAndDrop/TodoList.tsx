import React from 'react';
import { Stack, Typography, Grid, Divider, Box } from '@mui/material';
import { useDroppable } from '@dnd-kit/core';
import { TodosType } from '@/utils/types/helper.types';
import RealtimeTodos from './realtime-todos';

type TodoListProps = {
    todos: TodosType[];
    level: string;
    refreshTodos: () => Promise<void>;
};

const TodoList = (props: TodoListProps) => {
    const { todos, level, refreshTodos } = props;
    const { isOver, setNodeRef } = useDroppable({ id: level });

    const style = {
        backgroundColor: '#F7FAFB',
        minHeight: '600px',
        border: isOver ? '2px solid green' : 'none',
        borderRadius: '4px',
        padding: '10px',
    };

    return (
        <Grid item md={3}>
            <Stack spacing={2} sx={style} ref={setNodeRef}>
                <Box>
                    <Typography variant="h5">{level}</Typography>
                    <Divider />
                </Box>
                <RealtimeTodos todos={todos ?? []} refreshTodos={refreshTodos} />
            </Stack>
        </Grid>
    );
};

export default TodoList;
