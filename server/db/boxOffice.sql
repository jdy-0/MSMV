create table boxoffice(
movierank int(11),
name varchar(30),
movieCd int(20),
image blob);

DELIMITER $$
CREATE EVENT IF NOT EXISTS DropBoxoffice
    ON SCHEDULE
       EVERY 1 DAY STARTS '2021-07-01 00:00:05'
    ON COMPLETION PRESERVE
    ENABLE
    COMMENT 'Drop boxoffice'
    DO
	BEGIN
		TRUNCATE TABLE boxoffice;
	END$$
DELIMITER ;