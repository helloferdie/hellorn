import Realm from "realm";
import { createRealmContext } from "@realm/react";
import { Article } from "./article";

const realmConfig: Realm.Configuration = {
  schema: [Article],
  schemaVersion: 0,
  deleteRealmIfMigrationNeeded: true,
};

export const { RealmProvider, useRealm, useObject, useQuery } =
  createRealmContext(realmConfig);
