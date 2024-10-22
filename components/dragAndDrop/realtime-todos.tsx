"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import TodoItem from './TodoItem';
import { TodosType } from '@/utils/types/helper.types';

type RealtimeTodosProps = {
    todos: TodosType[];
    refreshTodos: () => Promise<void>;
};

export default function RealtimeTodos({ todos, refreshTodos }: RealtimeTodosProps) {
    const supabase = createClientComponentClient();
    const router = useRouter();

    // useEffect(() => {
    //     const channel = supabase
    //         .channel("realtime todos")
    //         .on(
    //             "postgres_changes",
    //             {
    //                 event: "*",
    //                 schema: "public",
    //                 table: "todos",
    //             },
    //             () => {
    //                 refreshTodos(); // Call the refreshTodos function to refresh the todos list
    //             }
    //         )
    //         .subscribe();

    //     return () => {
    //         supabase.removeChannel(channel);
    //     };
    // }, [supabase, refreshTodos]);

    // useEffect(() => {
    //     const channel = supabase
    //         .channel("realtime todos")
    //         .on(
    //             "postgres_changes",
    //             {
    //                 event: "*",
    //                 schema: "public",
    //                 table: "todos",
    //             },
    //             (payload) => {
    //                 console.log("Change received!", payload); // Log the change
    //                 refreshTodos(); // Refresh the todos list
    //             }
    //         )
    //         .subscribe((status) => {
    //             console.log("Subscription status:", status);
    //         });

    //     return () => {
    //         supabase.removeChannel(channel);
    //     };
    // }, [supabase, refreshTodos]);

    useEffect(() => {
        // if (!supabase) return;
    console.log( refreshTodos());
        // const channel = supabase
        //     .channel('realtime todos')
        //     .on(
        //         'postgres_changes',
        //         { event: '*', schema: 'public', table: 'todos' }, 
        //         (payload) => {
        //             console.log('Change received!', payload);
        //             refreshTodos(); 
        //         }
        //     )
        //     .subscribe();
    
        // // Clean up the subscription when the component is unmounted
        // return () => {
        //     supabase.removeChannel(channel);
        // };
    }, [supabase, refreshTodos]);
    
    


    return (
        <>
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} refreshTodos={refreshTodos} />
            ))}
        </>
    );
}
