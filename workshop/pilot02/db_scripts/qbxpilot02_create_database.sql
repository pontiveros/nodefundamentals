/** db name : db_pilot_02 **/ 
CREATE DATABASE db_pilot_02;
USE db_pilot_02;
/*****************************************************************************************/
-- deployment table 
CREATE TABLE deployment
(
	code		      INT PRIMARY KEY,	  -- deployment code 
	symbol		      VARCHAR(32),		  -- deployment symbol
	fullname	      VARCHAR(51),		  -- deployment name
	caption		      VARCHAR(32),		  -- deployment title
	status		      SMALLINT NOT NULL DEFAULT 1
);
CREATE INDEX k_dep_code ON deployment(code);

CREATE TABLE deployment_parameter
(
	code_deployment		INT,
	key_param		    VARCHAR(32),
	key_value		    VARCHAR(51),
	detail			    VARCHAR(101),
	status		      	SMALLINT NOT NULL DEFAULT 1
);
CREATE INDEX k_dep_param ON deployment_parameter(key_param);
CREATE INDEX k_dep_cod_param ON deployment_parameter(code_deployment,key_param);

/************************************************************************************/
-- agent table 
CREATE TABLE agent_type
(
	code		INT PRIMARY KEY,
	symbol		VARCHAR(32),
	caption		VARCHAR(51),
	level		SMALLINT NOT NULL DEFAULT 0,
	status		SMALLINT NOT NULL DEFAULT 1
);
CREATE INDEX k_agt_code ON agent_type (code);

CREATE TABLE agent
(
	instance		INT PRIMARY KEY , -- instance code de agente, pending increment.
	code_deployment	INT, -- codigo de deployment
	code_agent_type	INT, -- tipo de agente
	fullname		VARCHAR(81), -- nombre completo del agent
	price			FLOAT, -- precio vigente de la moto
	status			SMALLINT NOT NULL DEFAULT 1
);
CREATE INDEX k_age_instance ON agent (instance);

/*****************************************************************************************/
-- Customer tables
CREATE TABLE customer_type
(
	code		INT PRIMARY KEY,
	symbol		VARCHAR(32),
	caption		VARCHAR(51),
	percetaje 	FLOAT,
	status		SMALLINT NOT NULL DEFAULT 1
);
CREATE INDEX k_cut_code ON customer_type (code);

CREATE TABLE customer
(
	instance			INT PRIMARY KEY,
	code_deployment		INT,
	code_customer_type	INT,
    customer_id			VARCHAR(128), -- double check
	firstname 			VARCHAR(32),
    lastname			VARCHAR(32),
	email				VARCHAR(128),
	status				SMALLINT NOT NULL DEFAULT 1
);
CREATE INDEX k_cus_instance ON customer (instance);

-- location tables
CREATE TABLE location_type
(
	code				INT PRIMARY KEY,
	symbol				VARCHAR(32),
	caption				VARCHAR(51),
	item_max			SMALLINT NOT NULL DEFAULT 1,
	status				SMALLINT NOT NULL DEFAULT 1
);
CREATE INDEX k_loc_code on location_type(code); 

CREATE TABLE location
(
	instance			INT PRIMARY KEY, -- instance de la dirección
	code_deployment     INT,
	code_location_type  INT,
	instance_customer	INT, -- codigo al customer que pertenece la dirección
	street_detail		VARCHAR(51),
	location_detail		VARCHAR(51),
	status				SMALLINT NOT NULL DEFAULT 0
);
CREATE INDEX k_loc_instance ON location (instance);
CREATE INDEX k_loc_instcust ON location (instance_customer);

CREATE TABLE comments
(
	instance	INT PRIMARY KEY,
    datelog		TIMESTAMP,
    rating		INT NOT NULL DEFAULT 1,
    header		VARCHAR(32),
    body		VARCHAR(1024),
    status 		SMALLINT NOT NULL DEFAULT 0
)
/*****************************************************************************************/