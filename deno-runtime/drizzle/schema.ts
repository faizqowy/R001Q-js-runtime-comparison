import { mysqlTable, mysqlSchema, AnyMySqlColumn, primaryKey, unique, bigint, varchar, int, timestamp } from "drizzle-orm/mysql-core"
import { sql } from "drizzle-orm"

export const users = mysqlTable("users", {
	id: bigint({ mode: "number", unsigned: true }).autoincrement().notNull(),
	name: varchar({ length: 255 }).notNull(),
	age: int().notNull(),
	gender: varchar({ length: 255 }).notNull(),
	email: varchar({ length: 255 }).notNull(),
	phone: varchar({ length: 255 }),
	password: varchar({ length: 255 }).notNull(),
	address: varchar({ length: 255 }).notNull(),
	profilePicture: varchar("profile_picture", { length: 255 }).notNull(),
	createdAt: timestamp("created_at", { mode: 'string' }),
	updatedAt: timestamp("updated_at", { mode: 'string' }),
},
(table) => [
	primaryKey({ columns: [table.id], name: "users_id"}),
	unique("users_email_unique").on(table.email),
]);
