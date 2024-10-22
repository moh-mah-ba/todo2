// export type Json =
//   | string
//   | number
//   | boolean
//   | null
//   | { [key: string]: Json | undefined }
//   | Json[];

// export interface Database {
//     public: {
//         Tables: {
//             todos: {
//                 Row: {
//                     clerk_user_id: string
//                     completed: boolean | null
//                     created_at: number | null
//                     id: number
//                     text: string
//                     todo_level: number | null
//                     updated_at: number | null
//                 }
//                 Insert: {
//                     clerk_user_id: string
//                     completed?: boolean | null
//                     created_at?: number | null
//                     id?: number
//                     text: string
//                     todo_level?: number | null
//                     updated_at?: number | null
//                 }
//                 Update: {
//                     clerk_user_id?: string
//                     completed?: boolean | null
//                     created_at?: number | null
//                     id?: number
//                     text?: string
//                     todo_level?: number | null
//                     updated_at?: number | null
//                 }
//                 Relationships: []
//             }
//         }
//         Views: {
//             [_ in never]: never
//         }
//         Functions: {
//             [_ in never]: never
//         }
//         Enums: {
//             [_ in never]: never
//         }
//         CompositeTypes: {
//             [_ in never]: never
//         }
//     }
// }

// export type Tables<
//     PublicTableNameOrOptions extends
//     | keyof (Database['public']['Tables'] & Database['public']['Views'])
//     | { schema: keyof Database },
//     TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
//         ? keyof (Database[PublicTableNameOrOptions['schema']]['Tables'] &
//         Database[PublicTableNameOrOptions['schema']]['Views'])
//         : never = never,
// > = PublicTableNameOrOptions extends { schema: keyof Database }
//     ? (Database[PublicTableNameOrOptions['schema']]['Tables'] &
//     Database[PublicTableNameOrOptions['schema']]['Views'])[TableName] extends {
//         Row: infer R
//     }
//         ? R
//         : never
//     : PublicTableNameOrOptions extends keyof (Database['public']['Tables'] &
//     Database['public']['Views'])
//         ? (Database['public']['Tables'] &
//         Database['public']['Views'])[PublicTableNameOrOptions] extends {
//             Row: infer R
//         }
//             ? R
//             : never
//         : never;

// export type TablesInsert<
//     PublicTableNameOrOptions extends
//     | keyof Database['public']['Tables']
//     | { schema: keyof Database },
//     TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
//         ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
//         : never = never,
// > = PublicTableNameOrOptions extends { schema: keyof Database }
//     ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
//         Insert: infer I
//     }
//         ? I
//         : never
//     : PublicTableNameOrOptions extends keyof Database['public']['Tables']
//         ? Database['public']['Tables'][PublicTableNameOrOptions] extends {
//             Insert: infer I
//         }
//             ? I
//             : never
//         : never;

// export type TablesUpdate<
//     PublicTableNameOrOptions extends
//     | keyof Database['public']['Tables']
//     | { schema: keyof Database },
//     TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
//         ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
//         : never = never,
// > = PublicTableNameOrOptions extends { schema: keyof Database }
//     ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
//         Update: infer U
//     }
//         ? U
//         : never
//     : PublicTableNameOrOptions extends keyof Database['public']['Tables']
//         ? Database['public']['Tables'][PublicTableNameOrOptions] extends {
//             Update: infer U
//         }
//             ? U
//             : never
//         : never;

// export type Enums<
//     PublicEnumNameOrOptions extends
//     | keyof Database['public']['Enums']
//     | { schema: keyof Database },
//     EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
//         ? keyof Database[PublicEnumNameOrOptions['schema']]['Enums']
//         : never = never,
// > = PublicEnumNameOrOptions extends { schema: keyof Database }
//     ? Database[PublicEnumNameOrOptions['schema']]['Enums'][EnumName]
//     : PublicEnumNameOrOptions extends keyof Database['public']['Enums']
//         ? Database['public']['Enums'][PublicEnumNameOrOptions]
//         : never;

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
    public: {
        Tables: {
            todos: {
                Row: {
                    clerk_user_id: string;
                    completed: boolean | null;
                    created_at: number | null;
                    id: number;
                    text: string;
                    todo_level: number | null;
                    updated_at: number | null;
                };
                Insert: {
                    clerk_user_id: string;
                    completed?: boolean | null;
                    created_at?: number | null;
                    id?: number;
                    text: string;
                    todo_level?: number | null;
                    updated_at?: number | null;
                };
                Update: {
                    clerk_user_id?: string;
                    completed?: boolean | null;
                    created_at?: number | null;
                    id?: number;
                    text?: string;
                    todo_level?: number | null;
                    updated_at?: number | null;
                };
                Relationships: [];
            };
        };
        Views: {
            [_ in never]: never;
        };
        Functions: {
            [_ in never]: never;
        };
        Enums: {
            todo_status: 'pending' | 'completed' | 'archived'; // Example enum for todo status
            // Add other enums here as needed
        };
        CompositeTypes: {
            [_ in never]: never;
        };
    };
}

export type Tables<
    PublicTableNameOrOptions extends
    | keyof (Database['public']['Tables'] & Database['public']['Views'])
    | { schema: keyof Database },
    TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
        ? keyof (Database[PublicTableNameOrOptions['schema']]['Tables'] &
        Database[PublicTableNameOrOptions['schema']]['Views'])
        : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
    ? (Database[PublicTableNameOrOptions['schema']]['Tables'] &
    Database[PublicTableNameOrOptions['schema']]['Views'])[TableName] extends {
        Row: infer R
    }
        ? R
        : never
    : PublicTableNameOrOptions extends keyof (Database['public']['Tables'] &
    Database['public']['Views'])
        ? (Database['public']['Tables'] &
        Database['public']['Views'])[PublicTableNameOrOptions] extends {
            Row: infer R
        }
            ? R
            : never
        : never;

export type TablesInsert<
    PublicTableNameOrOptions extends
    | keyof Database['public']['Tables']
    | { schema: keyof Database },
    TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
        ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
        : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
    ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
        Insert: infer I
    }
        ? I
        : never
    : PublicTableNameOrOptions extends keyof Database['public']['Tables']
        ? Database['public']['Tables'][PublicTableNameOrOptions] extends {
            Insert: infer I
        }
            ? I
            : never
        : never;

export type TablesUpdate<
    PublicTableNameOrOptions extends
    | keyof Database['public']['Tables']
    | { schema: keyof Database },
    TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
        ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
        : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
    ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
        Update: infer U
    }
        ? U
        : never
    : PublicTableNameOrOptions extends keyof Database['public']['Tables']
        ? Database['public']['Tables'][PublicTableNameOrOptions] extends {
            Update: infer U
        }
            ? U
            : never
        : never;

// Solution 2: Enums with actual enum types
export type Enums<
    PublicEnumNameOrOptions extends
    | keyof Database['public']['Enums']
    | { schema: keyof Database },
    EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
        ? keyof Database[PublicEnumNameOrOptions['schema']]['Enums']
        : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
    ? Database[PublicEnumNameOrOptions['schema']]['Enums'][EnumName]
    : Database['public']['Enums'][EnumName];
