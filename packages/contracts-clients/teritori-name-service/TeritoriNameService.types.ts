/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.16.3.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

export interface AddressOfResponse {
  contract_address?: string | null;
  owner: string;
  validator_address?: string | null;
  [k: string]: unknown;
}
export interface AdminAddressResponse {
  minter: string;
  [k: string]: unknown;
}
export type Expiration = {
  at_height: number;
} | {
  at_time: Timestamp;
} | {
  never: {
    [k: string]: unknown;
  };
};
export type Timestamp = Uint64;
export type Uint64 = string;
export type Logo = {
  url: string;
} | {
  embedded: EmbeddedLogo;
};
export type EmbeddedLogo = {
  svg: Binary;
} | {
  png: Binary;
};
export type Binary = string;
export interface AllNftInfoResponse {
  access: OwnerOfResponse;
  info: NftInfoResponseForMetadata;
  [k: string]: unknown;
}
export interface OwnerOfResponse {
  approvals: Approval[];
  owner: string;
  [k: string]: unknown;
}
export interface Approval {
  expires: Expiration;
  spender: string;
  [k: string]: unknown;
}
export interface NftInfoResponseForMetadata {
  extension: Metadata;
  token_uri?: string | null;
  [k: string]: unknown;
}
export interface Metadata {
  contract_address?: string | null;
  discord_id?: string | null;
  email?: string | null;
  external_url?: string | null;
  image?: string | null;
  image_data?: Logo | null;
  keybase_id?: string | null;
  parent_token_id?: string | null;
  pgp_public_key?: string | null;
  public_bio?: string | null;
  public_name?: string | null;
  telegram_id?: string | null;
  twitter_id?: string | null;
  validator_operator_address?: string | null;
  [k: string]: unknown;
}
export interface AllOperatorsResponse {
  operators: Approval[];
  [k: string]: unknown;
}
export interface AllTokensResponse {
  tokens: string[];
  [k: string]: unknown;
}
export interface BaseTokensResponse {
  tokens: string[];
  [k: string]: unknown;
}
export type Uint128 = string;
export interface ContractInfoResponse {
  base_mint_fee?: Uint128 | null;
  burn_percentage?: number | null;
  name: string;
  native_decimals: number;
  native_denom: string;
  short_name_surcharge?: SurchargeInfo | null;
  symbol: string;
  token_cap?: number | null;
  [k: string]: unknown;
}
export interface SurchargeInfo {
  surcharge_fee: Uint128;
  surcharge_max_characters: number;
  [k: string]: unknown;
}
export type ExecuteMsg = {
  update_supported_domain: UpdateSupportedDomainMsg;
} | {
  update_minting_fees: UpdateMintingFeesMsg;
} | {
  update_username_length_cap: {
    new_length: number;
    [k: string]: unknown;
  };
} | {
  update_primary_alias: {
    token_id: string;
    [k: string]: unknown;
  };
} | {
  update_metadata: UpdateMetadataMsg;
} | {
  burn: {
    token_id: string;
    [k: string]: unknown;
  };
} | {
  burn_paths: {
    token_id: string;
    [k: string]: unknown;
  };
} | {
  set_admin_address: {
    admin_address: string;
    [k: string]: unknown;
  };
} | {
  mint: MintMsgForMetadata;
} | {
  mint_path: MintMsgForMetadata;
} | {
  transfer_nft: {
    recipient: string;
    token_id: string;
    [k: string]: unknown;
  };
} | {
  send_nft: {
    contract: string;
    msg: Binary;
    token_id: string;
    [k: string]: unknown;
  };
} | {
  approve: {
    expires?: Expiration | null;
    spender: string;
    token_id: string;
    [k: string]: unknown;
  };
} | {
  revoke: {
    spender: string;
    token_id: string;
    [k: string]: unknown;
  };
} | {
  approve_all: {
    expires?: Expiration | null;
    operator: string;
    [k: string]: unknown;
  };
} | {
  revoke_all: {
    operator: string;
    [k: string]: unknown;
  };
};
export interface UpdateSupportedDomainMsg {
  domain: string;
  is_supported: boolean;
  [k: string]: unknown;
}
export interface UpdateMintingFeesMsg {
  base_mint_fee?: Uint128 | null;
  burn_percentage?: number | null;
  short_name_surcharge?: SurchargeInfo | null;
  token_cap?: number | null;
  [k: string]: unknown;
}
export interface UpdateMetadataMsg {
  metadata: Metadata;
  token_id: string;
  [k: string]: unknown;
}
export interface MintMsgForMetadata {
  extension: Metadata;
  owner: string;
  token_id: string;
  token_uri?: string | null;
  [k: string]: unknown;
}
export interface GetFullPathResponse {
  path: string;
  [k: string]: unknown;
}
export interface GetParentIdResponse {
  parent_token_id: string;
  [k: string]: unknown;
}
export interface GetParentInfoResponse {
  extension: Metadata;
  token_uri?: string | null;
  [k: string]: unknown;
}
export interface GetPathResponse {
  path: string;
  [k: string]: unknown;
}
export interface InstantiateMsg {
  admin_address: string;
  base_mint_fee?: Uint128 | null;
  burn_percentage?: number | null;
  domain?: string | null;
  name: string;
  native_decimals: number;
  native_denom: string;
  short_name_surcharge?: SurchargeInfo | null;
  symbol: string;
  token_cap?: number | null;
  username_length_cap?: number | null;
  [k: string]: unknown;
}
export interface IsContractResponse {
  contract_address: string;
  [k: string]: unknown;
}
export type IsSupportedDomainResponse = boolean;
export interface ListInfoByAliasResponse {
  users: UserInfo[];
  [k: string]: unknown;
}
export interface UserInfo {
  alias: string;
  metadata: Metadata;
  owner: string;
  [k: string]: unknown;
}
export interface ListUserInfoResponse {
  users: UserInfo[];
  [k: string]: unknown;
}
export interface MigrateMsg {
  target_version: string;
  [k: string]: unknown;
}
export interface MinterResponse {
  minter: string;
  [k: string]: unknown;
}
export interface MintingFeesResponse {
  base_mint_fee?: Uint128 | null;
  burn_percentage?: number | null;
  native_decimals: number;
  native_denom: string;
  short_name_surcharge?: SurchargeInfo | null;
  token_cap?: number | null;
  [k: string]: unknown;
}
export interface NftInfoResponse {
  extension: Metadata;
  token_uri?: string | null;
  [k: string]: unknown;
}
export interface NumTokensResponse {
  count: number;
  [k: string]: unknown;
}
export interface OperatorsResponse {
  operators: Approval[];
  [k: string]: unknown;
}
export interface PathsForTokenResponse {
  tokens: string[];
  [k: string]: unknown;
}
export interface PathsResponse {
  tokens: string[];
  [k: string]: unknown;
}
export interface PrimaryAliasResponse {
  username: string;
  [k: string]: unknown;
}
export type QueryMsg = {
  is_supported_domain: {
    domain: string;
    [k: string]: unknown;
  };
} | {
  primary_alias: {
    address: string;
    [k: string]: unknown;
  };
} | {
  owner_of: {
    include_expired?: boolean | null;
    token_id: string;
    [k: string]: unknown;
  };
} | {
  address_of: {
    token_id: string;
    [k: string]: unknown;
  };
} | {
  all_operators: {
    include_expired?: boolean | null;
    limit?: number | null;
    owner: string;
    start_after?: string | null;
    [k: string]: unknown;
  };
} | {
  num_tokens: {
    [k: string]: unknown;
  };
} | {
  contract_info: {
    [k: string]: unknown;
  };
} | {
  nft_info: {
    token_id: string;
    [k: string]: unknown;
  };
} | {
  all_nft_info: {
    include_expired?: boolean | null;
    token_id: string;
    [k: string]: unknown;
  };
} | {
  tokens: {
    limit?: number | null;
    owner: string;
    start_after?: string | null;
    [k: string]: unknown;
  };
} | {
  base_tokens: {
    limit?: number | null;
    owner: string;
    start_after?: string | null;
    [k: string]: unknown;
  };
} | {
  all_tokens: {
    limit?: number | null;
    start_after?: string | null;
    [k: string]: unknown;
  };
} | {
  admin_address: {
    [k: string]: unknown;
  };
} | {
  is_contract: {
    token_id: string;
    [k: string]: unknown;
  };
} | {
  get_parent_id: {
    token_id: string;
    [k: string]: unknown;
  };
} | {
  get_parent_info: {
    token_id: string;
    [k: string]: unknown;
  };
} | {
  get_full_path: {
    token_id: string;
    [k: string]: unknown;
  };
} | {
  paths: {
    limit?: number | null;
    owner: string;
    start_after?: string | null;
    [k: string]: unknown;
  };
} | {
  paths_for_token: {
    limit?: number | null;
    owner: string;
    start_after?: string | null;
    token_id: string;
    [k: string]: unknown;
  };
} | {
  list_info_by_alias: {
    aliases: string[];
    [k: string]: unknown;
  };
};
export interface TokensResponse {
  tokens: string[];
  [k: string]: unknown;
}