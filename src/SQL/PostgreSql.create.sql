﻿




CREATE TABLE ОценкаПодробно (
 primaryKey UUID NOT NULL,
 Номер INT NULL,
 Сотрудники UUID NOT NULL,
 Оценка UUID NOT NULL,
 ОтчётОбОценке UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Увольнение (
 primaryKey UUID NOT NULL,
 ДатаУвольнения TIMESTAMP(3) NULL,
 Причина VARCHAR(14) NULL,
 Сотрудники UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ОтчётОбОценке (
 primaryKey UUID NOT NULL,
 ДатаСоздания TIMESTAMP(3) NULL,
 Сотрудники UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Оценка (
 primaryKey UUID NOT NULL,
 ДатаПроведения TIMESTAMP(3) NULL,
 Статус VARCHAR(10) NULL,
 Комментарий VARCHAR(255) NULL,
 Сотрудники UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Сотрудники (
 primaryKey UUID NOT NULL,
 ФИО VARCHAR(255) NULL,
 Должность VARCHAR(255) NULL,
 Ранг VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMNETLOCKDATA (
 LockKey VARCHAR(300) NOT NULL,
 UserName VARCHAR(300) NOT NULL,
 LockDate TIMESTAMP(3) NULL,
 PRIMARY KEY (LockKey));


CREATE TABLE STORMSETTINGS (
 primaryKey UUID NOT NULL,
 Module VARCHAR(1000) NULL,
 Name VARCHAR(255) NULL,
 Value TEXT NULL,
 "User" VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMAdvLimit (
 primaryKey UUID NOT NULL,
 "User" VARCHAR(255) NULL,
 Published BOOLEAN NULL,
 Module VARCHAR(255) NULL,
 Name VARCHAR(255) NULL,
 Value TEXT NULL,
 HotKeyData INT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERSETTING (
 primaryKey UUID NOT NULL,
 Name VARCHAR(255) NOT NULL,
 DataObjectView VARCHAR(255) NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMWEBSEARCH (
 primaryKey UUID NOT NULL,
 Name VARCHAR(255) NOT NULL,
 "Order" INT NOT NULL,
 PresentView VARCHAR(255) NOT NULL,
 DetailedView VARCHAR(255) NOT NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERDETAIL (
 primaryKey UUID NOT NULL,
 Caption VARCHAR(255) NOT NULL,
 DataObjectView VARCHAR(255) NOT NULL,
 ConnectMasterProp VARCHAR(255) NOT NULL,
 OwnerConnectProp VARCHAR(255) NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERLOOKUP (
 primaryKey UUID NOT NULL,
 DataObjectType VARCHAR(255) NOT NULL,
 Container VARCHAR(255) NULL,
 ContainerTag VARCHAR(255) NULL,
 FieldsToView VARCHAR(255) NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE UserSetting (
 primaryKey UUID NOT NULL,
 AppName VARCHAR(256) NULL,
 UserName VARCHAR(512) NULL,
 UserGuid UUID NULL,
 ModuleName VARCHAR(1024) NULL,
 ModuleGuid UUID NULL,
 SettName VARCHAR(256) NULL,
 SettGuid UUID NULL,
 SettLastAccessTime TIMESTAMP(3) NULL,
 StrVal VARCHAR(256) NULL,
 TxtVal TEXT NULL,
 IntVal INT NULL,
 BoolVal BOOLEAN NULL,
 GuidVal UUID NULL,
 DecimalVal DECIMAL(20,10) NULL,
 DateTimeVal TIMESTAMP(3) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ApplicationLog (
 primaryKey UUID NOT NULL,
 Category VARCHAR(64) NULL,
 EventId INT NULL,
 Priority INT NULL,
 Severity VARCHAR(32) NULL,
 Title VARCHAR(256) NULL,
 Timestamp TIMESTAMP(3) NULL,
 MachineName VARCHAR(32) NULL,
 AppDomainName VARCHAR(512) NULL,
 ProcessId VARCHAR(256) NULL,
 ProcessName VARCHAR(512) NULL,
 ThreadName VARCHAR(512) NULL,
 Win32ThreadId VARCHAR(128) NULL,
 Message VARCHAR(2500) NULL,
 FormattedMessage TEXT NULL,
 PRIMARY KEY (primaryKey));



 ALTER TABLE ОценкаПодробно ADD CONSTRAINT FK0c6b547e777a0f2f7eea99bbb3043ae30b5a43eb FOREIGN KEY (Сотрудники) REFERENCES Сотрудники; 
CREATE INDEX Index0c6b547e777a0f2f7eea99bbb3043ae30b5a43eb on ОценкаПодробно (Сотрудники); 

 ALTER TABLE ОценкаПодробно ADD CONSTRAINT FK225960d829aeb4a5158445cece303fb606db5480 FOREIGN KEY (Оценка) REFERENCES Оценка; 
CREATE INDEX Index225960d829aeb4a5158445cece303fb606db5480 on ОценкаПодробно (Оценка); 

 ALTER TABLE ОценкаПодробно ADD CONSTRAINT FK95c3c0523647fbc26c204b3c6c163ca808341c80 FOREIGN KEY (ОтчётОбОценке) REFERENCES ОтчётОбОценке; 
CREATE INDEX Index95c3c0523647fbc26c204b3c6c163ca808341c80 on ОценкаПодробно (ОтчётОбОценке); 

 ALTER TABLE Увольнение ADD CONSTRAINT FKe9c4e3a1248ce67181d011a5fcb65595bc49dac0 FOREIGN KEY (Сотрудники) REFERENCES Сотрудники; 
CREATE INDEX Indexe9c4e3a1248ce67181d011a5fcb65595bc49dac0 on Увольнение (Сотрудники); 

 ALTER TABLE ОтчётОбОценке ADD CONSTRAINT FK7b4514c4709da3fc507ecc5b784499c06c50864c FOREIGN KEY (Сотрудники) REFERENCES Сотрудники; 
CREATE INDEX Index7b4514c4709da3fc507ecc5b784499c06c50864c on ОтчётОбОценке (Сотрудники); 

 ALTER TABLE Оценка ADD CONSTRAINT FKad300ab23933aef87935af4d6738f347cdeee259 FOREIGN KEY (Сотрудники) REFERENCES Сотрудники; 
CREATE INDEX Indexad300ab23933aef87935af4d6738f347cdeee259 on Оценка (Сотрудники); 

 ALTER TABLE STORMWEBSEARCH ADD CONSTRAINT FKc4378e39870eb056aec84088683297a01d2a6200 FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

 ALTER TABLE STORMFILTERDETAIL ADD CONSTRAINT FK921d16269835017e2a0d0e29ad6fb175454a70d0 FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

 ALTER TABLE STORMFILTERLOOKUP ADD CONSTRAINT FKce38ef0db3f01a53acaa49fed8853fb941ad47ba FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

