# ISeds

-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Версия сервера: 5.7.33-log
-- Версия PHP: 7.4.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `is_eds`
--

DELIMITER $$
--
-- Процедуры
--
CREATE DEFINER=`root`@`localhost` PROCEDURE `get_obl` (IN `obl` VARCHAR(45))  BEGIN
    SELECT oblast, id_prR
    FROM prrs
    WHERE oblast
	LIKE '%Ремонт%';
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `SelectOblPrr` (`oblst` VARCHAR(100))  BEGIN
    SELECT oblast
    FROM prrs
    WHERE oblast = oblst;
END$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Структура таблицы `authenticates`
--

CREATE TABLE `authenticates` (
  `login` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `authenticates`
--

INSERT INTO `authenticates` (`login`, `password`, `createdAt`, `updatedAt`) VALUES
('a12345', '12345', NULL, NULL),
('sotr1', '152535', NULL, NULL);

-- --------------------------------------------------------

--
-- Структура таблицы `avsit`
--

CREATE TABLE `avsit` (
  `id_avSit` int(11) NOT NULL,
  `id_sotr` int(11) NOT NULL,
  `nazv` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `dataas` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `id_krab` int(11) NOT NULL,
  `prmk_a` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `doks`
--

CREATE TABLE `doks` (
  `id_dok` int(11) NOT NULL,
  `n_dok` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `data_of` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `doks`
--

INSERT INTO `doks` (`id_dok`, `n_dok`, `data_of`, `createdAt`, `updatedAt`) VALUES
(1, 'Заключение договора с Инструменты', '20.01.2021', NULL, NULL),
(2, 'Приказ на Предсезонные работы', '22.05.2022', NULL, NULL),
(3, 'Отчёт о выполнении Аварийных работ', '19.08.2021', NULL, NULL),
(4, 'Отчёт о выполнении Предсезонных работ', '04.12.2022', '2022-12-04', '2022-12-04');

-- --------------------------------------------------------

--
-- Структура таблицы `instrs`
--

CREATE TABLE `instrs` (
  `id_instr` int(11) NOT NULL,
  `n_instr` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `k_instr` int(10) NOT NULL,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `instrs`
--

INSERT INTO `instrs` (`id_instr`, `n_instr`, `k_instr`, `createdAt`, `updatedAt`) VALUES
(1, 'Дрель', 4, NULL, NULL),
(2, 'Ножовка', 5, NULL, NULL),
(3, 'Отвёртка', 10, NULL, NULL);

-- --------------------------------------------------------

--
-- Дублирующая структура для представления `jobs`
-- (См. Ниже фактическое представление)
--
CREATE TABLE `jobs` (
`id_krab` int(11)
,`n_dok` varchar(100)
,`name` varchar(12)
,`familia` varchar(20)
,`doljnost` varchar(100)
,`n_instr` varchar(100)
,`k_instr` int(10)
);

-- --------------------------------------------------------

--
-- Структура таблицы `krabs`
--

CREATE TABLE `krabs` (
  `id_krab` int(11) NOT NULL,
  `id_dok` int(11) NOT NULL,
  `id_instr` int(11) NOT NULL,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `krabs`
--

INSERT INTO `krabs` (`id_krab`, `id_dok`, `id_instr`, `createdAt`, `updatedAt`) VALUES
(1, 1, 1, NULL, NULL),
(2, 2, 3, NULL, NULL),
(3, 3, 2, '2022-12-03', '2022-12-03'),
(4, 1, 2, '2022-12-04', '2022-12-04');

-- --------------------------------------------------------

--
-- Структура таблицы `needsotrs`
--

CREATE TABLE `needsotrs` (
  `counterElectr` int(11) NOT NULL DEFAULT '15'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `needsotrs`
--

INSERT INTO `needsotrs` (`counterElectr`) VALUES
(14);

-- --------------------------------------------------------

--
-- Структура таблицы `prrs`
--

CREATE TABLE `prrs` (
  `id_prR` int(11) NOT NULL,
  `id_sotr` int(11) NOT NULL,
  `id_krab` int(11) NOT NULL,
  `oblast` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `datar` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `prmk` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `prrs`
--

INSERT INTO `prrs` (`id_prR`, `id_sotr`, `id_krab`, `oblast`, `datar`, `prmk`, `createdAt`, `updatedAt`) VALUES
(1, 1, 2, 'Ремонт трубопровода', '14.11.2021', 'Успешно', NULL, NULL),
(2, 2, 1, 'Ремонт проводки на втором этаже', '20.01.2021', 'Успешно', NULL, NULL),
(3, 3, 3, 'Проверка оборудования', '01.10.2021', 'Успешно', NULL, NULL),
(4, 4, 1, 'Ремонт проводки на складе', '04.12.2022', 'Успешно', '2022-12-04', '2022-12-04');

-- --------------------------------------------------------

--
-- Структура таблицы `sotrs`
--

CREATE TABLE `sotrs` (
  `id_sotr` int(11) NOT NULL,
  `name` varchar(12) COLLATE utf8mb4_unicode_ci NOT NULL,
  `familia` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `otch` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `numt` varchar(12) COLLATE utf8mb4_unicode_ci NOT NULL,
  `doljnost` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `sotrs`
--

INSERT INTO `sotrs` (`id_sotr`, `name`, `familia`, `otch`, `numt`, `doljnost`, `createdAt`, `updatedAt`) VALUES
(1, 'Пётр', 'Петров', 'Петрович', '89881001010', 'сантехник', NULL, NULL),
(2, 'Сергей', 'Ёлкин', 'Михайлович', '89881001050', 'электрик', NULL, NULL),
(3, 'Роман', 'Романов', 'Николаевич', '89881002010', 'инженер-энергетик', NULL, NULL),
(4, 'Богдан', 'Пчёлкин', 'Романович', '89526584532', 'инженер-энергетик', '2022-12-04', '2022-12-04'),
(5, 'Галактазар', 'Лактионов', 'Сергеевич', '88005553535', 'Инженер-теплотехник', NULL, NULL);

--
-- Триггеры `sotrs`
--
DELIMITER $$
CREATE TRIGGER `countrSotrs` BEFORE INSERT ON `sotrs` FOR EACH ROW UPDATE needsotrs SET counterElectr = counterElectr - 1
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Структура для представления `jobs`
--
DROP TABLE IF EXISTS `jobs`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `jobs`  AS SELECT `krabs`.`id_krab` AS `id_krab`, `doks`.`n_dok` AS `n_dok`, `sotrs`.`name` AS `name`, `sotrs`.`familia` AS `familia`, `sotrs`.`doljnost` AS `doljnost`, `instrs`.`n_instr` AS `n_instr`, `instrs`.`k_instr` AS `k_instr` FROM ((((`krabs` join `doks` on((`krabs`.`id_dok` = `doks`.`id_dok`))) join `prrs` on((`krabs`.`id_krab` = `prrs`.`id_krab`))) join `sotrs` on((`prrs`.`id_sotr` = `sotrs`.`id_sotr`))) join `instrs` on((`krabs`.`id_instr` = `instrs`.`id_instr`))) ;

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `avsit`
--
ALTER TABLE `avsit`
  ADD PRIMARY KEY (`id_avSit`),
  ADD KEY `id_sotr` (`id_sotr`),
  ADD KEY `id_krab` (`id_krab`);

--
-- Индексы таблицы `doks`
--
ALTER TABLE `doks`
  ADD PRIMARY KEY (`id_dok`);

--
-- Индексы таблицы `instrs`
--
ALTER TABLE `instrs`
  ADD PRIMARY KEY (`id_instr`);

--
-- Индексы таблицы `krabs`
--
ALTER TABLE `krabs`
  ADD PRIMARY KEY (`id_krab`),
  ADD KEY `id_dok` (`id_dok`),
  ADD KEY `id_instr` (`id_instr`);

--
-- Индексы таблицы `prrs`
--
ALTER TABLE `prrs`
  ADD PRIMARY KEY (`id_prR`),
  ADD KEY `id_sotr` (`id_sotr`),
  ADD KEY `id_krab` (`id_krab`);

--
-- Индексы таблицы `sotrs`
--
ALTER TABLE `sotrs`
  ADD PRIMARY KEY (`id_sotr`);

--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `avsit`
--
ALTER TABLE `avsit`
  ADD CONSTRAINT `avsit_ibfk_1` FOREIGN KEY (`id_sotr`) REFERENCES `sotrs` (`id_sotr`),
  ADD CONSTRAINT `avsit_ibfk_2` FOREIGN KEY (`id_krab`) REFERENCES `krabs` (`id_krab`);

--
-- Ограничения внешнего ключа таблицы `krabs`
--
ALTER TABLE `krabs`
  ADD CONSTRAINT `krabs_ibfk_1` FOREIGN KEY (`id_dok`) REFERENCES `doks` (`id_dok`),
  ADD CONSTRAINT `krabs_ibfk_2` FOREIGN KEY (`id_instr`) REFERENCES `instrs` (`id_instr`);

--
-- Ограничения внешнего ключа таблицы `prrs`
--
ALTER TABLE `prrs`
  ADD CONSTRAINT `prrs_ibfk_1` FOREIGN KEY (`id_sotr`) REFERENCES `sotrs` (`id_sotr`),
  ADD CONSTRAINT `prrs_ibfk_2` FOREIGN KEY (`id_krab`) REFERENCES `krabs` (`id_krab`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
