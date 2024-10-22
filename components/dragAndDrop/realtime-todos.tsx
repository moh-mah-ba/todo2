'use client';

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useEffect } from 'react';
import { TodosType } from '@/utils/types/helper.types';
import TodoItem from './TodoItem';

type RealtimeTodosProps = {
    todos: TodosType[];
    refreshTodos: () => Promise<void>;
};

export default function RealtimeTodos({ todos, refreshTodos }: RealtimeTodosProps) {
    const supabase = createClientComponentClient();

    useEffect(() => {
        const channel = supabase
            .channel('realtime todos')
            .on(
                'postgres_changes',
                {
                    event: '*',
                    schema: 'public',
                    table: 'todos',
                },
                () => {
                    // console.log('Change received!', payload); // Log the change
                    refreshTodos(); // Refresh the todos list
                },
            )
            .subscribe(() => {
                // console.log('Subscription status:', status);
            });

        return () => {
            supabase.removeChannel(channel);
        };
    }, [supabase, refreshTodos]);

    return (
        <>
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} refreshTodos={refreshTodos} />
            ))}
        </>
    );
}
