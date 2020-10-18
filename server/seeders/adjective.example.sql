USE eigo_db;
-- group and long use backticks because they are reserve keywords in SQL
INSERT 
INTO 
adjectives 
(startingLetter, `group`, english, plain, present, presentNeg, past, pastNeg) 
VALUES 

("a", "i", "new", "あたらしい", "あたらしいです", "あたらしくないです", "あたらしかった", "あたらしくなかった"),
("a", "i", "hot", "あつい", "あついです", "あつくないです", "あつかった", "あつくなかった");


