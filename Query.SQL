CREATE TABLE my_web.users (
	id INTEGER auto_increment NOT NULL,
	name varchar(100) NOT NULL,
	password varchar(100) NOT NULL,
	nickname varchar(100) NOT NULL,
	CONSTRAINT users_pk PRIMARY KEY (id)
)
ENGINE=InnoDB
DEFAULT CHARSET=utf8
COLLATE=utf8_general_ci;

CREATE TABLE my_web.posts (
	id INTEGER auto_increment NOT NULL,
	title varchar(100) NOT NULL,
	content LONGTEXT NOT NULL,
	writer INT NOT NULL,
	CONSTRAINT posts_pk PRIMARY KEY (id),
	CONSTRAINT posts_FK FOREIGN KEY (writer) REFERENCES my_web.users(id)
)
ENGINE=InnoDB
DEFAULT CHARSET=utf8
COLLATE=utf8_general_ci;
