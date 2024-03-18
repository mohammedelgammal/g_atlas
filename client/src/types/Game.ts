export interface GameInfoProps {
  id: string | undefined;
}

export interface GameScreenshotsProps {
  id: string | undefined;
}

export interface TrailersProps {
  id: string | undefined;
}

export interface Trailer {
  src: string;
  poster: string;
}

export interface InfoBoxProps {
  title: string;
  list: string[] | string;
}
