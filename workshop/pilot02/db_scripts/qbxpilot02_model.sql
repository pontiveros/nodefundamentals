select * from agent_type;

insert into agent_type
values (1, 'AGENT_ADMIN', 'Admin', 1, 1);

insert into agent_type
values (2, 'AGENT_MANAGER', 'Manager', 2, 1);

insert into agent_type
values (3, 'AGENT_USER', 'Viewer', 1, 1);

select * from customer_type;

use db_pilot_02;
delete from customer_type;
DELETE FROM customer_type;

insert into customer_type values (1, 'CUSTOMER_TYPE_A', 'Exclusive', 0.45, 1);
insert into customer_type values (2, 'CUSTOMER_TYPE_B', 'Premium', 0.3, 1);
insert into customer_type values (3, 'CUSTOMER_TYPE_C', 'Preference', 0.2, 1);
insert into customer_type values (4, 'CUSTOMER_TYPE_D', 'Influencer', 0.1, 1);


