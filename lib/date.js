import { formatDistanceToNow, parseISO } from "date-fns";
import trLocale from "date-fns/locale/tr";

const ConvertDate = (date) => {
  const parsedDate = parseISO(date);

  const formattedDate = formatDistanceToNow(parsedDate, {
    addSuffix: true,
    locale: trLocale,
  });
  return formattedDate;
};

export default ConvertDate;
