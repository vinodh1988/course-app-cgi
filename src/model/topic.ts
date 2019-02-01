import {subtopic} from './subtopic';

export interface topic{
 topic_id:number;
 topic:string;
 modulecode:number;
 status:boolean;
 expand:string;
 subTopic:subtopic[];
}