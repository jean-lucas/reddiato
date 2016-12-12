angular.module('chatCtrl', [])

	.controller('chatCtrl', function() {
		var self = this;



		this.activeChatId = 0;
		this.currentBox = 0;
    this.msgWrite = "";



		this.selectChat = function(val) {
			self.activeChatId = val;
		}

    this.sendMsg =  function() {
      
      if (self.msgWrite.length > 0) {

        var msg = {
          "text" : self.msgWrite,
          "from" : 1,
          "date" : new Date(),
        }
      
        self.chatList[self.activeChatId].chat.push(msg);
      
        //clear message after
        self.msgWrite = "";
      }
    }






		this.chatList = [
  {
    "id": 0,
    "name": "Mills Michael",
    "chat": [
      {
        "text": "consectetur adipisicing ex nostrud irure",
        "from": 0,
        "date": "2015-05-23T11:14:41 +04:00"
      },
      {
        "text": "in deserunt ut",
        "from": 1,
        "date": "2016-06-10T11:24:26 +04:00"
      },
      {
        "text": "eiusmod quis quis nisi amet pariatur",
        "from": 0,
        "date": "2016-06-30T01:37:31 +04:00"
      },
      {
        "text": "id",
        "from": 0,
        "date": "2015-04-23T02:05:57 +04:00"
      },
      {
        "text": "sint proident eiusmod consequat incididunt",
        "from": 0,
        "date": "2015-12-21T05:02:02 +05:00"
      },
      {
        "text": "nulla magna sint pariatur laboris voluptate",
        "from": 0,
        "date": "2016-08-16T03:50:20 +04:00"
      },
      {
        "text": "ex nostrud minim",
        "from": 0,
        "date": "2014-01-25T02:28:18 +05:00"
      },
      {
        "text": "nostrud culpa",
        "from": 1,
        "date": "2015-04-26T02:05:28 +04:00"
      },
      {
        "text": "mollit laborum dolore",
        "from": 0,
        "date": "2016-06-20T04:36:43 +04:00"
      },
      {
        "text": "dolor eiusmod nostrud",
        "from": 1,
        "date": "2015-12-15T10:59:30 +05:00"
      },
      {
        "text": "id incididunt dolore",
        "from": 0,
        "date": "2016-06-26T07:20:34 +04:00"
      },
      {
        "text": "nostrud amet eiusmod aliqua consectetur tempor id",
        "from": 1,
        "date": "2016-06-02T05:58:03 +04:00"
      }
    ]
  },
  {
    "id": 1,
    "name": "Hope Morrison",
    "chat": [
      {
        "text": "incididunt ut incididunt sint",
        "from": 1,
        "date": "2015-08-08T11:44:27 +04:00"
      },
      {
        "text": "incididunt duis culpa cupidatat consequat deserunt",
        "from": 0,
        "date": "2016-09-23T03:01:24 +04:00"
      },
      {
        "text": "officia duis eu nisi dolore enim tempor",
        "from": 1,
        "date": "2014-08-10T06:40:50 +04:00"
      },
      {
        "text": "do sint ex cupidatat sint laboris ex",
        "from": 0,
        "date": "2015-02-07T06:15:15 +05:00"
      },
      {
        "text": "incididunt",
        "from": 0,
        "date": "2015-12-04T03:13:34 +05:00"
      },
      {
        "text": "cillum nisi labore",
        "from": 0,
        "date": "2016-07-10T09:07:03 +04:00"
      },
      {
        "text": "dolore",
        "from": 1,
        "date": "2014-06-14T01:13:51 +04:00"
      },
      {
        "text": "ad",
        "from": 0,
        "date": "2016-03-02T05:54:52 +05:00"
      },
      {
        "text": "voluptate occaecat ullamco",
        "from": 0,
        "date": "2015-05-26T05:10:30 +04:00"
      }
    ]
  },
  {
    "id": 2,
    "name": "Isabel Bradley",
    "chat": [
      {
        "text": "ullamco qui dolore",
        "from": 1,
        "date": "2016-09-13T09:34:42 +04:00"
      },
      {
        "text": "consequat in consectetur",
        "from": 0,
        "date": "2016-08-03T11:47:26 +04:00"
      },
      {
        "text": "nostrud consectetur aute ea ullamco pariatur",
        "from": 1,
        "date": "2016-03-28T02:12:25 +04:00"
      },
      {
        "text": "excepteur sunt",
        "from": 1,
        "date": "2015-10-30T11:48:08 +04:00"
      },
      {
        "text": "in do",
        "from": 0,
        "date": "2016-04-11T08:47:02 +04:00"
      },
      {
        "text": "ut",
        "from": 0,
        "date": "2015-05-01T02:06:26 +04:00"
      },
      {
        "text": "aute fugiat minim",
        "from": 1,
        "date": "2015-10-26T09:32:23 +04:00"
      },
      {
        "text": "aliquip exercitation enim sint magna",
        "from": 1,
        "date": "2016-05-20T06:15:52 +04:00"
      },
      {
        "text": "velit incididunt minim",
        "from": 0,
        "date": "2016-05-22T02:34:17 +04:00"
      }
    ]
  },
  {
    "id": 3,
    "name": "Valarie Mc.",
    "chat": [
      {
        "text": "cupidatat",
        "from": 0,
        "date": "2016-07-22T07:08:05 +04:00"
      },
      {
        "text": "dolor excepteur tempor elit dolore",
        "from": 1,
        "date": "2016-11-11T05:54:59 +05:00"
      },
      {
        "text": "non sint mollit mollit amet mollit",
        "from": 1,
        "date": "2016-08-21T01:31:30 +04:00"
      },
      {
        "text": "duis minim esse incididunt tempor incididunt duis",
        "from": 1,
        "date": "2015-09-30T03:15:38 +04:00"
      },
      {
        "text": "nulla consectetur",
        "from": 0,
        "date": "2015-09-01T01:11:49 +04:00"
      },
      {
        "text": "non nulla",
        "from": 0,
        "date": "2016-02-04T08:07:09 +05:00"
      },
      {
        "text": "proident aliqua eu",
        "from": 1,
        "date": "2015-03-11T09:52:53 +04:00"
      },
      {
        "text": "in do",
        "from": 1,
        "date": "2014-12-16T07:11:47 +05:00"
      },
      {
        "text": "est elit sint veniam ea",
        "from": 1,
        "date": "2014-08-31T07:23:43 +04:00"
      },
      {
        "text": "Lorem",
        "from": 0,
        "date": "2014-10-17T09:54:25 +04:00"
      },
      {
        "text": "esse veniam sit ut enim Lorem duis",
        "from": 0,
        "date": "2015-06-22T10:21:10 +04:00"
      },
      {
        "text": "reprehenderit amet laboris",
        "from": 1,
        "date": "2014-08-04T09:59:43 +04:00"
      }
    ]
  },
  {
    "id": 4,
    "name": "Sweeney Hart",
    "chat": [
      {
        "text": "cupidatat",
        "from": 0,
        "date": "2014-12-29T07:17:08 +05:00"
      },
      {
        "text": "dolore esse laboris aliquip eiusmod Lorem",
        "from": 0,
        "date": "2014-01-25T01:24:34 +05:00"
      },
      {
        "text": "fugiat",
        "from": 0,
        "date": "2015-05-15T01:29:01 +04:00"
      },
      {
        "text": "laboris ex eu laborum",
        "from": 0,
        "date": "2014-03-06T09:44:04 +05:00"
      },
      {
        "text": "excepteur sit minim consectetur duis fugiat qui",
        "from": 1,
        "date": "2015-11-24T03:26:54 +05:00"
      },
      {
        "text": "dolor anim",
        "from": 1,
        "date": "2015-10-12T06:33:40 +04:00"
      },
      {
        "text": "occaecat dolore eiusmod elit",
        "from": 1,
        "date": "2016-04-23T10:23:48 +04:00"
      },
      {
        "text": "nulla Lorem officia enim dolor",
        "from": 0,
        "date": "2014-02-08T03:17:36 +05:00"
      },
      {
        "text": "consectetur officia elit qui ipsum",
        "from": 0,
        "date": "2015-04-18T02:12:45 +04:00"
      },
      {
        "text": "minim aliquip ea voluptate deserunt commodo",
        "from": 0,
        "date": "2016-04-30T08:49:32 +04:00"
      },
      {
        "text": "culpa adipisicing",
        "from": 0,
        "date": "2015-06-02T01:12:53 +04:00"
      },
      {
        "text": "laboris",
        "from": 0,
        "date": "2016-10-31T08:10:33 +04:00"
      }
    ]
  },
  {
    "id": 5,
    "name": "Mcdonald Val",
    "chat": [
      {
        "text": "dolore eu irure sunt aute cillum tempor",
        "from": 0,
        "date": "2014-02-09T07:11:37 +05:00"
      },
      {
        "text": "pariatur dolor cillum nulla aliqua enim do",
        "from": 1,
        "date": "2015-06-21T10:48:23 +04:00"
      },
      {
        "text": "enim",
        "from": 1,
        "date": "2016-04-26T08:51:57 +04:00"
      },
      {
        "text": "Lorem ex proident incididunt nisi voluptate",
        "from": 0,
        "date": "2016-07-31T06:43:06 +04:00"
      },
      {
        "text": "magna proident dolore excepteur occaecat officia",
        "from": 0,
        "date": "2014-04-16T12:02:24 +04:00"
      },
      {
        "text": "mollit fugiat est laborum",
        "from": 1,
        "date": "2014-12-28T03:26:28 +05:00"
      },
      {
        "text": "non Lorem et officia",
        "from": 1,
        "date": "2014-09-06T06:52:30 +04:00"
      },
      {
        "text": "deserunt enim laborum commodo quis cillum",
        "from": 1,
        "date": "2015-11-18T05:29:37 +05:00"
      },
      {
        "text": "dolore magna do excepteur tempor laboris fugiat",
        "from": 1,
        "date": "2014-09-19T03:56:45 +04:00"
      },
      {
        "text": "qui incididunt eu",
        "from": 1,
        "date": "2014-04-25T11:14:15 +04:00"
      },
      {
        "text": "et laboris exercitation incididunt",
        "from": 1,
        "date": "2015-12-06T05:41:55 +05:00"
      },
      {
        "text": "proident fugiat consequat in",
        "from": 1,
        "date": "2016-02-10T08:08:54 +05:00"
      }
    ]
  },
  {
    "id": 6,
    "name": "Nona Robinson",
    "chat": [
      {
        "text": "sit ut duis",
        "from": 1,
        "date": "2014-10-21T04:44:18 +04:00"
      },
      {
        "text": "voluptate minim sit",
        "from": 0,
        "date": "2015-01-23T09:47:11 +05:00"
      },
      {
        "text": "et ad nulla",
        "from": 1,
        "date": "2015-01-04T05:18:37 +05:00"
      },
      {
        "text": "commodo deserunt quis labore",
        "from": 1,
        "date": "2016-07-11T12:47:51 +04:00"
      },
      {
        "text": "anim occaecat incididunt",
        "from": 0,
        "date": "2014-04-03T03:10:13 +04:00"
      },
      {
        "text": "sint laboris ut",
        "from": 1,
        "date": "2014-10-05T01:08:11 +04:00"
      },
      {
        "text": "exercitation nostrud nisi quis id ut labore",
        "from": 0,
        "date": "2014-01-07T01:49:25 +05:00"
      },
      {
        "text": "incididunt officia consectetur quis voluptate tempor laboris",
        "from": 0,
        "date": "2014-04-18T04:58:59 +04:00"
      },
      {
        "text": "non est aliquip aliqua commodo id",
        "from": 1,
        "date": "2016-10-02T08:06:37 +04:00"
      }
    ]
  },
  {
    "id": 7,
    "name": "Frazier Britt",
    "chat": [
      {
        "text": "nisi duis Lorem aliquip mollit elit",
        "from": 0,
        "date": "2016-06-11T07:19:22 +04:00"
      },
      {
        "text": "incididunt veniam aute ad ad",
        "from": 1,
        "date": "2015-11-09T04:39:49 +05:00"
      },
      {
        "text": "amet dolore sit veniam Lorem incididunt pariatur",
        "from": 1,
        "date": "2014-09-27T10:25:00 +04:00"
      },
      {
        "text": "amet cillum do amet consequat",
        "from": 1,
        "date": "2014-04-03T10:05:07 +04:00"
      },
      {
        "text": "commodo nulla nulla id",
        "from": 0,
        "date": "2014-06-17T07:45:33 +04:00"
      },
      {
        "text": "cillum dolor irure velit qui ex magna",
        "from": 0,
        "date": "2015-07-14T09:36:48 +04:00"
      },
      {
        "text": "exercitation duis dolor Lorem ad irure",
        "from": 1,
        "date": "2014-01-05T10:10:53 +05:00"
      },
      {
        "text": "nulla dolore consectetur incididunt nulla",
        "from": 1,
        "date": "2014-02-06T11:00:55 +05:00"
      },
      {
        "text": "proident eu ad ullamco exercitation sint id",
        "from": 0,
        "date": "2015-09-14T02:50:15 +04:00"
      },
      {
        "text": "est",
        "from": 1,
        "date": "2016-07-11T11:12:44 +04:00"
      },
      {
        "text": "nisi mollit in",
        "from": 0,
        "date": "2016-05-25T03:09:02 +04:00"
      },
      {
        "text": "nisi aliqua consectetur",
        "from": 0,
        "date": "2016-03-28T07:14:36 +04:00"
      }
    ]
  },
  {
    "id": 8,
    "name": "Irene Melton",
    "chat": [
      {
        "text": "exercitation elit nisi sint voluptate officia officia",
        "from": 0,
        "date": "2014-04-12T09:08:31 +04:00"
      },
      {
        "text": "voluptate fugiat adipisicing nisi eiusmod excepteur",
        "from": 1,
        "date": "2015-10-21T12:47:59 +04:00"
      },
      {
        "text": "qui aute proident consequat ullamco minim non",
        "from": 1,
        "date": "2016-06-21T04:18:40 +04:00"
      },
      {
        "text": "voluptate laboris adipisicing ad velit",
        "from": 0,
        "date": "2014-04-14T02:30:36 +04:00"
      },
      {
        "text": "duis nisi culpa eu pariatur laboris culpa",
        "from": 1,
        "date": "2014-12-25T06:44:08 +05:00"
      },
      {
        "text": "ipsum do labore ullamco consectetur laborum",
        "from": 0,
        "date": "2014-04-02T03:37:03 +04:00"
      }
    ]
  },
  {
    "id": 9,
    "name": "Monroe Garcia",
    "chat": [
      {
        "text": "anim magna elit",
        "from": 1,
        "date": "2015-11-23T06:26:52 +05:00"
      },
      {
        "text": "do pariatur velit ex cillum anim fugiat",
        "from": 0,
        "date": "2015-05-14T12:31:06 +04:00"
      },
      {
        "text": "do reprehenderit tempor qui minim",
        "from": 0,
        "date": "2014-07-20T06:04:50 +04:00"
      },
      {
        "text": "cupidatat ullamco proident ullamco irure cupidatat fugiat",
        "from": 1,
        "date": "2015-03-02T02:22:42 +05:00"
      },
      {
        "text": "nostrud minim veniam",
        "from": 0,
        "date": "2014-10-18T07:11:06 +04:00"
      }
    ]
  },
  {
    "id": 10,
    "name": "Kendra Brad",
    "chat": [
      {
        "text": "do",
        "from": 0,
        "date": "2016-07-28T02:02:28 +04:00"
      },
      {
        "text": "et ut occaecat dolore deserunt",
        "from": 1,
        "date": "2014-12-23T08:02:37 +05:00"
      },
      {
        "text": "magna ullamco non cillum laboris magna",
        "from": 0,
        "date": "2016-01-23T11:06:17 +05:00"
      },
      {
        "text": "ut non laborum voluptate",
        "from": 1,
        "date": "2016-03-11T07:04:31 +05:00"
      },
      {
        "text": "aliqua id consequat amet amet magna",
        "from": 1,
        "date": "2014-03-18T04:50:25 +04:00"
      },
      {
        "text": "duis adipisicing eu nostrud sint",
        "from": 0,
        "date": "2016-08-27T11:48:56 +04:00"
      },
      {
        "text": "sint anim officia eiusmod quis proident ipsum",
        "from": 1,
        "date": "2016-04-25T03:39:08 +04:00"
      }
    ]
  },
  {
    "id": 11,
    "name": "Dillard Olsen",
    "chat": [
      {
        "text": "irure dolor proident et minim proident ut",
        "from": 0,
        "date": "2015-04-14T06:43:18 +04:00"
      },
      {
        "text": "sit non magna voluptate nisi",
        "from": 1,
        "date": "2016-02-07T01:10:47 +05:00"
      },
      {
        "text": "mollit non ut reprehenderit labore dolore sit",
        "from": 1,
        "date": "2015-10-01T07:28:09 +04:00"
      },
      {
        "text": "laboris excepteur eiusmod nisi aute laborum aliqua",
        "from": 0,
        "date": "2015-11-12T01:50:19 +05:00"
      },
      {
        "text": "amet deserunt Lorem Lorem sint labore",
        "from": 0,
        "date": "2015-06-11T11:39:21 +04:00"
      },
      {
        "text": "consequat veniam adipisicing qui nostrud quis aute",
        "from": 0,
        "date": "2016-03-05T11:09:58 +05:00"
      },
      {
        "text": "tempor magna Lorem voluptate",
        "from": 0,
        "date": "2014-12-03T02:09:29 +05:00"
      },
      {
        "text": "sunt laboris commodo",
        "from": 0,
        "date": "2016-04-29T10:06:36 +04:00"
      },
      {
        "text": "mollit eu eu esse esse dolore",
        "from": 1,
        "date": "2016-04-27T08:35:45 +04:00"
      },
      {
        "text": "eiusmod culpa laboris aliquip",
        "from": 0,
        "date": "2015-03-21T09:13:15 +04:00"
      },
      {
        "text": "magna occaecat",
        "from": 0,
        "date": "2016-07-31T07:14:08 +04:00"
      },
      {
        "text": "aliqua",
        "from": 0,
        "date": "2016-10-31T04:32:53 +04:00"
      }
    ]
  }
]





	});