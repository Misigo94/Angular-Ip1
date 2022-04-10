// export class Quote {
//      id: number;
//     name: string;
//     quote: string;
//     author: string;
//      datePosted:any;
//      upVotes: number;
//     downVotes: number;
//   likes: number;
//   dislikes: number;

//     constructor( id: number,name: string,quote: string,
//         author: string, upVotes: number, downVotes: number) {
//         this.id = id;
//         this.name = name;
//         this.quote = quote;
//         this.author = author;
//         this.upVotes = upVotes;
//         this.downVotes = downVotes;
// }

// }


export class Quote {
  showInfo: boolean;
  constructor(public id:number,public name:string,public title:string,public quote:string,public author:string, public datePosted: Date,public likes:number, public dislikes:number){
      this.showInfo=false;
    }
}
