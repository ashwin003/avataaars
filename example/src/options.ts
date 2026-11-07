import type { AvatarProps } from 'avataaars'

export type OptionKey = Exclude<
  keyof AvatarProps,
  'className' | 'style' | 'pieceType' | 'pieceSize' | 'viewBox'
>

export type Config = Record<OptionKey, string>

const fabricColors = [
  'Black', 'Blue01', 'Blue02', 'Blue03', 'Gray01', 'Gray02', 'Heather',
  'PastelBlue', 'PastelGreen', 'PastelOrange', 'PastelRed', 'PastelYellow',
  'Pink', 'Red', 'White',
]

const facialHairColors = [
  'Auburn', 'Black', 'Blonde', 'BlondeGolden', 'Brown', 'BrownDark',
  'Platinum', 'Red', 'SilverGray',
]

const hatTops = ['Hijab', 'Turban', 'WinterHat1', 'WinterHat2', 'WinterHat3', 'WinterHat4']

// Hairstyles whose colour can be changed (the rest have fixed colours).
const colourableHairTops = [
  'LongHairBigHair', 'LongHairBob', 'LongHairBun', 'LongHairCurly',
  'LongHairCurvy', 'LongHairDreads', 'LongHairFro', 'LongHairFroBand',
  'LongHairMiaWallace', 'LongHairNotTooLong', 'LongHairStraight',
  'LongHairStraight2', 'LongHairStraightStrand', 'ShortHairDreads01',
  'ShortHairDreads02', 'ShortHairFrizzle', 'ShortHairShaggyMullet',
  'ShortHairShortCurly', 'ShortHairShortFlat', 'ShortHairShortRound',
  'ShortHairShortWaved', 'ShortHairSides', 'ShortHairTheCaesar',
  'ShortHairTheCaesarSidePart',
]

const colourableClothes = [
  'CollarSweater', 'GraphicShirt', 'Hoodie', 'Overall', 'ShirtCrewNeck',
  'ShirtScoopNeck', 'ShirtVNeck',
]

export interface OptionGroup {
  title: string
  options: OptionDef[]
}

export interface OptionDef {
  key: OptionKey
  label: string
  values: string[]
  defaultValue: string
  /** Hide the control when it would have no visible effect. */
  visible?: (config: Config) => boolean
}

export const groups: OptionGroup[] = [
  {
    title: 'Style',
    options: [
      { key: 'avatarStyle', label: 'Background', values: ['Circle', 'Transparent'], defaultValue: 'Circle' },
      {
        key: 'skinColor', label: 'Skin', defaultValue: 'Light',
        values: ['Tanned', 'Yellow', 'Pale', 'Light', 'Brown', 'DarkBrown', 'Black'],
      },
    ],
  },
  {
    title: 'Top',
    options: [
      {
        key: 'topType', label: 'Top', defaultValue: 'LongHairStraight',
        values: ['NoHair', 'Eyepatch', 'Hat', ...hatTops, ...colourableHairTops.slice(0, 7),
          'LongHairFrida', ...colourableHairTops.slice(7, 10), 'LongHairShavedSides',
          ...colourableHairTops.slice(10)],
      },
      {
        key: 'hairColor', label: 'Hair colour', defaultValue: 'BrownDark',
        values: [...facialHairColors, 'PastelPink', 'Blue'],
        visible: (c) => colourableHairTops.includes(c.topType),
      },
      {
        // '' lets each hat use its own default colour.
        key: 'hatColor', label: 'Hat colour', defaultValue: '', values: ['', ...fabricColors],
        visible: (c) => hatTops.includes(c.topType),
      },
      {
        key: 'accessoriesType', label: 'Accessories', defaultValue: 'Blank',
        values: ['Blank', 'Kurt', 'Prescription01', 'Prescription02', 'Round', 'Sunglasses', 'Wayfarers'],
        visible: (c) => c.topType !== 'Eyepatch',
      },
      {
        key: 'facialHairType', label: 'Facial hair', defaultValue: 'Blank',
        values: ['Blank', 'BeardMedium', 'BeardLight', 'BeardMajestic', 'MoustacheFancy', 'MoustacheMagnum'],
        visible: (c) => c.topType !== 'Hijab',
      },
      {
        key: 'facialHairColor', label: 'Facial hair colour', defaultValue: 'BrownDark',
        values: facialHairColors,
        visible: (c) => c.topType !== 'Hijab' && c.facialHairType !== 'Blank',
      },
    ],
  },
  {
    title: 'Clothes',
    options: [
      {
        key: 'clotheType', label: 'Clothes', defaultValue: 'BlazerShirt',
        values: ['BlazerShirt', 'BlazerSweater', ...colourableClothes],
      },
      {
        key: 'clotheColor', label: 'Fabric colour', defaultValue: 'Gray01', values: fabricColors,
        visible: (c) => colourableClothes.includes(c.clotheType),
      },
      {
        key: 'graphicType', label: 'Graphic', defaultValue: 'Skull',
        values: ['Bat', 'Bear', 'Cumbia', 'Deer', 'Diamond', 'Hola', 'Pizza', 'Resist', 'Selena', 'Skull', 'SkullOutline'],
        visible: (c) => c.clotheType === 'GraphicShirt',
      },
    ],
  },
  {
    title: 'Face',
    options: [
      {
        key: 'eyeType', label: 'Eyes', defaultValue: 'Default',
        values: ['Close', 'Cry', 'Default', 'Dizzy', 'EyeRoll', 'Happy', 'Hearts', 'Side', 'Squint', 'Surprised', 'Wink', 'WinkWacky'],
      },
      {
        key: 'eyebrowType', label: 'Eyebrows', defaultValue: 'Default',
        values: ['Angry', 'AngryNatural', 'Default', 'DefaultNatural', 'FlatNatural', 'FrownNatural',
          'RaisedExcited', 'RaisedExcitedNatural', 'SadConcerned', 'SadConcernedNatural',
          'UnibrowNatural', 'UpDown', 'UpDownNatural'],
      },
      {
        key: 'mouthType', label: 'Mouth', defaultValue: 'Default',
        values: ['Concerned', 'Default', 'Disbelief', 'Eating', 'Grimace', 'Sad', 'ScreamOpen', 'Serious', 'Smile', 'Tongue', 'Twinkle', 'Vomit'],
      },
    ],
  },
]

const allOptions = groups.flatMap((g) => g.options)

export const defaultConfig = Object.fromEntries(
  allOptions.map((o) => [o.key, o.defaultValue])
) as Config

export function randomConfig(): Config {
  const pick = (values: string[]) => values[Math.floor(Math.random() * values.length)]
  return Object.fromEntries(allOptions.map((o) => [o.key, pick(o.values)])) as Config
}

export function isVisible(option: OptionDef, config: Config): boolean {
  return option.visible ? option.visible(config) : true
}

/** JSX for the current config, listing only props that differ from defaults and are visible. */
export function toJsx(config: Config): string {
  const props = allOptions
    .filter((o) => o.key === 'avatarStyle' || (isVisible(o, config) && config[o.key] !== o.defaultValue))
    .map((o) => `  ${o.key}="${config[o.key]}"`)
  return `<Avatar\n${props.join('\n')}\n/>`
}
