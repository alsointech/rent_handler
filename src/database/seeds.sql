-- Create Clients Table
CREATE TABLE clients (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL
);

-- Create CDs Table
CREATE TABLE cds (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    artist VARCHAR(255) NOT NULL,
    release_date DATE NOT NULL
);

-- Create Rentals Table
CREATE TABLE rentals (
    id SERIAL PRIMARY KEY,
    client_id INT REFERENCES clients(id) ON DELETE CASCADE,
    cd_id INT REFERENCES cds(id) ON DELETE CASCADE,
    rental_date DATE NOT NULL,
    return_date DATE
);

-- Create Penalties Table
CREATE TABLE penalties (
    id SERIAL PRIMARY KEY,
    client_id INT REFERENCES clients(id) ON DELETE CASCADE,
    rental_id INT REFERENCES rentals(id) ON DELETE CASCADE,
    amount DECIMAL(10, 2) NOT NULL,
    penalty_date DATE NOT NULL
);
