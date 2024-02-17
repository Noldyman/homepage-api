type weekOrMonth = "week" | "month";

const selectClauseWithNewAge =
  "SELECT *, YEAR(CURDATE()) - YEAR(dateOfBirth) AS newAge FROM noldys.buddies";

const orderByClause = "ORDER BY MONTH(dateOfBirth), DAY(dateOfBirth);";

const whereClauseBirthdaysNextWeekOrMonth = (interval: weekOrMonth) =>
  `WHERE DATE_ADD(dateOfBirth, INTERVAL YEAR(CURDATE()) - YEAR(dateOfBirth) YEAR) BETWEEN CURDATE() AND DATE_ADD(CURDATE(), INTERVAL 1 ${interval.toUpperCase()})`;

export const queryToday = `
${selectClauseWithNewAge}
WHERE DATE_FORMAT(dateOfBirth, '%m-%d') = DATE_FORMAT(CURDATE(), '%m-%d')
${orderByClause}
`;

export const queryThisWeekOrMonth = (interval: weekOrMonth) => `
${selectClauseWithNewAge}
${whereClauseBirthdaysNextWeekOrMonth(interval)}
${orderByClause}
`;

export const queryYear = `
${selectClauseWithNewAge}
${orderByClause}
`;

export const queryCount = `
SELECT 
(SELECT COUNT(*) 
 FROM noldys.buddies
 WHERE DATE_FORMAT(dateOfBirth, '%m-%d') = DATE_FORMAT(CURDATE(), '%m-%d')) AS today,
(SELECT COUNT(*) 
 FROM noldys.buddies
 ${whereClauseBirthdaysNextWeekOrMonth("week")}) AS comingWeek,
(SELECT COUNT(*) 
 FROM noldys.buddies
${whereClauseBirthdaysNextWeekOrMonth("month")}) AS comingMonth
`;
