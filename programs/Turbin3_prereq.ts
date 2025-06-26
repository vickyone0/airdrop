export type Turbin3Prereq = {
  address: "TRBZyQHB3m68FGeVsqTK39Wm4xejadjVhP5MAZaKWDM";
  metadata: {
    name: "q3_pre_reqs_rs";
    version: "0.1.0";
    spec: "0.1.0";
    description: "Created with Anchor";
  };
  instructions: [
    {
      name: "close";
      discriminator: [number, number, number, number, number, number, number, number];
      accounts: [
        { name: "user"; writable: true },
        { 
          name: "account"; 
          writable: true;
          pda: {
            seeds: [
              { kind: "const"; value: [number, number, number, number, number, number, number] }, // "prereqs"
              { kind: "account"; path: "user" }
            ];
          };
        },
        { name: "system_program"; address: "11111111111111111111111111111111" }
      ];
      args: [];
    },
    {
      name: "create_collection";
      discriminator: [number, number, number, number, number, number, number, number];
      accounts: [
        { name: "creator"; writable: true; signer: true },
        { name: "collection"; writable: true; signer: true },
        { 
          name: "authority";
          pda: {
            seeds: [
              { kind: "const"; value: [number, number, number, number, number, number, number, number, number, number] }, // "collection"
              { kind: "account"; path: "collection" }
            ];
          };
        },
        { name: "mpl_core_program"; address: "CoREENxT6tW1HoK8ypY1SxRMZTcVPm7R94rH4PZNhX7d" },
        { name: "system_program"; address: "11111111111111111111111111111111" }
      ];
      args: [];
    },
    {
      name: "initialize";
      discriminator: [number, number, number, number, number, number, number, number];
      accounts: [
        { name: "user"; writable: true; signer: true },
        { 
          name: "account";
          writable: true;
          pda: {
            seeds: [
              { kind: "const"; value: [number, number, number, number, number, number, number] }, // "prereqs"
              { kind: "account"; path: "user" }
            ];
          };
        },
        { name: "system_program"; address: "11111111111111111111111111111111" }
      ];
      args: [{ name: "github"; type: "string" }];
    },
    {
      name: "submit_rs";
      discriminator: [number, number, number, number, number, number, number, number];
      accounts: [
        { name: "user"; writable: true; signer: true },
        { 
          name: "account";
          writable: true;
          pda: {
            seeds: [
              { kind: "const"; value: [number, number, number, number, number, number, number] }, // "prereqs"
              { kind: "account"; path: "user" }
            ];
          };
        },
        { name: "mint"; writable: true; signer: true },
        { name: "collection"; writable: true },
        { 
          name: "authority";
          pda: {
            seeds: [
              { kind: "const"; value: [number, number, number, number, number, number, number, number, number, number] }, // "collection"
              { kind: "account"; path: "collection" }
            ];
          };
        },
        { name: "mpl_core_program"; address: "CoREENxT6tW1HoK8ypY1SxRMZTcVPm7R94rH4PZNhX7d" },
        { name: "system_program"; address: "11111111111111111111111111111111" }
      ];
      args: [];
    },
    {
      name: "submitTs";
      discriminator: [number, number, number, number, number, number, number, number];
      accounts: [
        { name: "user"; writable: true; signer: true },
        { 
          name: "account";
          writable: true;
          pda: {
            seeds: [
              { kind: "const"; value: [number, number, number, number, number, number, number] }, // "prereqs"
              { kind: "account"; path: "user" }
            ];
          };
        },
        { name: "mint"; writable: true; signer: true },
        { name: "collection"; writable: true },
        { 
          name: "authority";
          pda: {
            seeds: [
              { kind: "const"; value: [number, number, number, number, number, number, number, number, number, number] }, // "collection"
              { kind: "account"; path: "collection" }
            ];
          };
        },
        { name: "mpl_core_program"; address: "CoREENxT6tW1HoK8ypY1SxRMZTcVPm7R94rH4PZNhX7d" },
        { name: "system_program"; address: "11111111111111111111111111111111" }
      ];
      args: [];
    },
    {
      name: "update";
      discriminator: [number, number, number, number, number, number, number, number];
      accounts: [
        { name: "user"; writable: true; signer: true },
        { 
          name: "account";
          pda: {
            seeds: [
              { kind: "const"; value: [number, number, number, number, number, number, number] }, // "prereqs"
              { kind: "account"; path: "user" }
            ];
          };
        },
        { name: "system_program"; address: "11111111111111111111111111111111" }
      ];
      args: [{ name: "github"; type: "string" }];
    }
  ];
  accounts: [
    {
      name: "ApplicationAccount";
      discriminator: [number, number, number, number, number, number, number, number];
    }
  ];
  errors: [
    { code: 6000; name: "PreReqTsNotCompleted"; msg: "TS submission not completed." },
    { code: 6001; name: "PreReqTsAlreadyCompleted"; msg: "TS submission already completed." },
    { code: 6002; name: "PreReqRsAlreadyCompleted"; msg: "Rust submission already completed." },
    { code: 6003; name: "PreReqRsNotInTimeWindow"; msg: "Submission not allowed." }
  ];
  types: [
    {
      name: "ApplicationAccount";
      type: {
        kind: "struct";
        fields: [
          { name: "user"; type: "pubkey" },
          { name: "bump"; type: "u8" },
          { name: "pre_req_ts"; type: "bool" },
          { name: "pre_req_rs"; type: "bool" },
          { name: "github"; type: "string" }
        ];
      };
    }
  ];
};

export const IDL: Turbin3Prereq = {
  "address": "TRBZyQHB3m68FGeVsqTK39Wm4xejadjVhP5MAZaKWDM",
  "metadata": {
    "name": "q3_pre_reqs_rs",
    "version": "0.1.0",
    "spec": "0.1.0",
    "description": "Created with Anchor"
  },
  "instructions": [
    {
      "name": "close",
      "discriminator": [98, 165, 201, 177, 108, 65, 206, 96],
      "accounts": [
        {
          "name": "user",
          "writable": true
        },
        {
          "name": "account",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [112, 114, 101, 114, 101, 113, 115] // "prereqs"
              },
              {
                "kind": "account",
                "path": "user"
              }
            ]
          }
        },
        {
          "name": "system_program",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": []
    },
    {
      "name": "create_collection",
      "discriminator": [156, 251, 92, 54, 233, 2, 16, 82],
      "accounts": [
        {
          "name": "creator",
          "writable": true,
          "signer": true
        },
        {
          "name": "collection",
          "writable": true,
          "signer": true
        },
        {
          "name": "authority",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [99, 111, 108, 108, 101, 99, 116, 105, 111, 110] // "collection"
              },
              {
                "kind": "account",
                "path": "collection"
              }
            ]
          }
        },
        {
          "name": "mpl_core_program",
          "address": "CoREENxT6tW1HoK8ypY1SxRMZTcVPm7R94rH4PZNhX7d"
        },
        {
          "name": "system_program",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": []
    },
    {
      "name": "initialize",
      "discriminator": [175, 175, 109, 31, 13, 152, 155, 237],
      "accounts": [
        {
          "name": "user",
          "writable": true,
          "signer": true
        },
        {
          "name": "account",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [112, 114, 101, 114, 101, 113, 115] // "prereqs"
              },
              {
                "kind": "account",
                "path": "user"
              }
            ]
          }
        },
        {
          "name": "system_program",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "github",
          "type": "string"
        }
      ]
    },
    {
      "name": "submit_rs",
      "discriminator": [77, 124, 82, 163, 21, 133, 181, 206],
      "accounts": [
        {
          "name": "user",
          "writable": true,
          "signer": true
        },
        {
          "name": "account",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [112, 114, 101, 114, 101, 113, 115] // "prereqs"
              },
              {
                "kind": "account",
                "path": "user"
              }
            ]
          }
        },
        {
          "name": "mint",
          "writable": true,
          "signer": true
        },
        {
          "name": "collection",
          "writable": true
        },
        {
          "name": "authority",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [99, 111, 108, 108, 101, 99, 116, 105, 111, 110] // "collection"
              },
              {
                "kind": "account",
                "path": "collection"
              }
            ]
          }
        },
        {
          "name": "mpl_core_program",
          "address": "CoREENxT6tW1HoK8ypY1SxRMZTcVPm7R94rH4PZNhX7d"
        },
        {
          "name": "system_program",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": []
    },
    {
      "name": "submitTs",
      "discriminator": [137, 241, 199, 223, 125, 33, 85, 217],
      "accounts": [
        {
          "name": "user",
          "writable": true,
          "signer": true
        },
        {
          "name": "account",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [112, 114, 101, 114, 101, 113, 115] // "prereqs"
              },
              {
                "kind": "account",
                "path": "user"
              }
            ]
          }
        },
        {
          "name": "mint",
          "writable": true,
          "signer": true
        },
        {
          "name": "collection",
          "writable": true
        },
        {
          "name": "authority",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [99, 111, 108, 108, 101, 99, 116, 105, 111, 110] // "collection"
              },
              {
                "kind": "account",
                "path": "collection"
              }
            ]
          }
        },
        {
          "name": "mpl_core_program",
          "address": "CoREENxT6tW1HoK8ypY1SxRMZTcVPm7R94rH4PZNhX7d"
        },
        {
          "name": "system_program",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": []
    },
    
    {
      "name": "update",
      "discriminator": [219, 200, 88, 176, 158, 63, 253, 127],
      "accounts": [
        {
          "name": "user",
          "writable": true,
          "signer": true
        },
        {
          "name": "account",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [112, 114, 101, 114, 101, 113, 115] // "prereqs"
              },
              {
                "kind": "account",
                "path": "user"
              }
            ]
          }
        },
        {
          "name": "system_program",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "github",
          "type": "string"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "ApplicationAccount",
      "discriminator": [222, 181, 17, 200, 212, 149, 64, 88]
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "PreReqTsNotCompleted",
      "msg": "TS submission not completed."
    },
    {
      "code": 6001,
      "name": "PreReqTsAlreadyCompleted",
      "msg": "TS submission already completed."
    },
    {
      "code": 6002,
      "name": "PreReqRsAlreadyCompleted",
      "msg": "Rust submission already completed."
    },
    {
      "code": 6003,
      "name": "PreReqRsNotInTimeWindow",
      "msg": "Submission not allowed."
    }
  ],
  "types": [
    {
      "name": "ApplicationAccount",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "user",
            "type": "pubkey"
          },
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "pre_req_ts",
            "type": "bool"
          },
          {
            "name": "pre_req_rs",
            "type": "bool"
          },
          {
            "name": "github",
            "type": "string"
          }
        ]
      }
    }
  ]
};