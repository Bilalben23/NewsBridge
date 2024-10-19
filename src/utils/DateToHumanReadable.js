import { formatDistanceToNow } from 'date-fns';

export function DateToHumanReadable(isoDate) {
    const distanceToNow = formatDistanceToNow(isoDate, { addSuffix: true });
    return distanceToNow;
}
