import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import Logo from "@/assets/logo.png";
import Logo2 from "@/assets/logo2.png";
import AntiCheat from "@/assets/antiCheat.png"
import AntiCheat2 from "@/assets/antiCheat2.png"
import Dmp from "@/assets/dmp.png"
import Dmp2 from "@/assets/dmp2.png"
import PassValid from "@/assets/passValid.png"
import PassValid2 from "@/assets/passValid2.png"
import QrCode from "@/assets/qrCode.png"
import QrCode2 from "@/assets/qrCode2.png"
import Situation1 from "@/assets/situation1.png"
import Situation2 from "@/assets/situation2.png"
import Situation3 from "@/assets/situation3.png"
import Situation4 from "@/assets/situation4.png"
import Situation5 from "@/assets/situation5.png"
import TrafficBg from "@/assets/trafficBg.png"

export enum ENV {
  QX = 'first',
  YM = 'second'
}

export const cn = (...args: ClassValue[]) => twMerge(clsx(args))

export const Env: ENV = ENV.QX
// export const Env: ENV = ENV.YM

// @ts-ignore
export const IS_FIRST = Env === ENV.QX

export const RLogo = IS_FIRST ? Logo : Logo2

export const RAntiCheat = IS_FIRST ? AntiCheat : AntiCheat2

export const RDmp =  IS_FIRST ? Dmp : Dmp2

export const RPassValid =  IS_FIRST ? PassValid : PassValid2

export const RQrCode =  IS_FIRST ? QrCode : QrCode2

export const RSituation1 =  Situation1

export const RSituation2 =  Situation2

export const RSituation3 =  Situation3

export const RSituation4 =  Situation4

export const RSituation5 =  Situation5

export const RTrafficBg =  TrafficBg

