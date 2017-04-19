/**
 * Created by sani on 19/04/2017.
 */

export interface IView {
  age: number;
  region: string;
  date: string;
}

export interface IVideo {
  title: string;
  author: string;
  id: string;
  viewDetails: IView[];
}
