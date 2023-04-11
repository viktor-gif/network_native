import { WIFI_API } from "../settings/globalConsts"

export const getCorrectMediaUrl = (photoUrl: string) => {
    return photoUrl.slice(0, 7).concat(WIFI_API, photoUrl?.slice(16))
}