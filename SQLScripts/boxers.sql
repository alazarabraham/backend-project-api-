create table Boxer (
    id serial primary key,
    name varchar(200),
    bio varchar(1000),
    currentWeight int,
    picture varchar(500),
    video varchar(500),
    trainer varchar(100),
    promoter varchar(100),
    country varchar(100),
    fightingStyle varchar(100),
    network varchar(100),
    weightClass varchar(100),
    beltNames varchar(500)
    );  

create table User (
    id serial primary key,
    first_name varchar(100), 
    last_name varchar(100),  
    email varchar(200)
);

create table User_rating (
    id serial primary key,
    comment varchar(500),
    -- a single review belongs to a boxer
    boxer_id integer references Boxers(id),
    -- a single review belongs to a single user
    user_id integer references users(id),
);

insert into Boxer(name,bio,currentWeight,picture,video,trainer,promoter,country,fightingStyle,network,weightClass,beltNames)
values (
'Gennady Golovkin',
'Triple G was only 9 when the soviet union dissolved. His brother recommended he start fighting,and he just happened to be extremely gifted at it. He rose through the ranks of boxing''s presitigious middleweight division. With the highest knock out ratio in the division''s history, he is considered one of the greatest middleweight champions ever. He has a steel chin, a master''s jab, and a right hand that can knock out any champion.',
159,
'http://tss.ib.tv/boxing/wp-content/uploads/2017/09/Golovkin.jpg',
'<iframe width="560" height="315" src="https://www.youtube.com/embed/kA7L4vKj75U" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
'Jonathan Banks','Triple G Promotions',
'Kazakhstan',
'Dominent',
'Dazn',
'Middleweight',
'IBF and IBO middleweight champion');

insert into ratings(score,content,dmv_id,user_id)
values('');

insert into users()
values('');
ALTER TABLE boxer DROP continent;