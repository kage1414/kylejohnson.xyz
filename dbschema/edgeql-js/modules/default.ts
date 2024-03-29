// GENERATED by @edgedb/generate v0.0.7
// Run 'npx @edgedb/generate edgeql-js' to re-generate

import * as $ from "../reflection";
import * as _ from "../imports";
import type * as _std from "./std";
export type $ApplicationλShape = $.typeutil.flatten<_std.$Object_68791e22679111ed89064d2d8ee0faf5λShape & {
  "descriptions": $.LinkDesc<$Description, $.Cardinality.Many, {}, true, false,  false, false>;
  "technologies": $.LinkDesc<$Technology, $.Cardinality.Many, {}, false, false,  false, false>;
  "active": $.PropertyDesc<_std.$bool, $.Cardinality.AtMostOne, false, false, false, true>;
  "priority": $.PropertyDesc<_std.$int32, $.Cardinality.AtMostOne, false, false, false, false>;
  "url": $.PropertyDesc<_std.$str, $.Cardinality.AtMostOne, false, false, false, false>;
  "name": $.PropertyDesc<_std.$str, $.Cardinality.AtMostOne, false, false, false, false>;
}>;
type $Application = $.ObjectType<"default::Application", $ApplicationλShape, null, [
  ..._std.$Object_68791e22679111ed89064d2d8ee0faf5['__exclusives__'],
  {descriptions: {__element__: $Description, __cardinality__: $.Cardinality.One | $.Cardinality.AtMostOne },},
]>;
const $Application = $.makeType<$Application>(_.spec, "d37b3456-d174-11ed-bdab-e70629b7a0bd", _.syntax.literal);

const Application: $.$expr_PathNode<$.TypeSet<$Application, $.Cardinality.Many>, null> = _.syntax.$PathNode($.$toSet($Application, $.Cardinality.Many), null);

export type $DescriptionλShape = $.typeutil.flatten<_std.$Object_68791e22679111ed89064d2d8ee0faf5λShape & {
  "priority": $.PropertyDesc<_std.$int32, $.Cardinality.AtMostOne, false, false, false, false>;
  "description": $.PropertyDesc<_std.$str, $.Cardinality.AtMostOne, false, false, false, false>;
  "<descriptions[is Application]": $.LinkDesc<$Application, $.Cardinality.AtMostOne, {}, false, false,  false, false>;
  "<descriptions[is Experience]": $.LinkDesc<$Experience, $.Cardinality.AtMostOne, {}, false, false,  false, false>;
  "<descriptions": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false,  false, false>;
}>;
type $Description = $.ObjectType<"default::Description", $DescriptionλShape, null, [
  ..._std.$Object_68791e22679111ed89064d2d8ee0faf5['__exclusives__'],
]>;
const $Description = $.makeType<$Description>(_.spec, "d36eb488-d174-11ed-8b3e-f704333e055b", _.syntax.literal);

const Description: $.$expr_PathNode<$.TypeSet<$Description, $.Cardinality.Many>, null> = _.syntax.$PathNode($.$toSet($Description, $.Cardinality.Many), null);

export type $EducationλShape = $.typeutil.flatten<_std.$Object_68791e22679111ed89064d2d8ee0faf5λShape & {
  "active": $.PropertyDesc<_std.$bool, $.Cardinality.AtMostOne, false, false, false, true>;
  "certificate": $.PropertyDesc<_std.$str, $.Cardinality.AtMostOne, false, false, false, false>;
  "degree": $.PropertyDesc<_std.$str, $.Cardinality.AtMostOne, false, false, false, false>;
  "priority": $.PropertyDesc<_std.$int32, $.Cardinality.AtMostOne, false, false, false, false>;
  "school": $.PropertyDesc<_std.$str, $.Cardinality.AtMostOne, false, false, false, false>;
  "time": $.PropertyDesc<_std.$str, $.Cardinality.AtMostOne, false, false, false, false>;
}>;
type $Education = $.ObjectType<"default::Education", $EducationλShape, null, [
  ..._std.$Object_68791e22679111ed89064d2d8ee0faf5['__exclusives__'],
]>;
const $Education = $.makeType<$Education>(_.spec, "d38779f0-d174-11ed-93d0-e9b629f70ed7", _.syntax.literal);

const Education: $.$expr_PathNode<$.TypeSet<$Education, $.Cardinality.Many>, null> = _.syntax.$PathNode($.$toSet($Education, $.Cardinality.Many), null);

export type $ExperienceλShape = $.typeutil.flatten<_std.$Object_68791e22679111ed89064d2d8ee0faf5λShape & {
  "descriptions": $.LinkDesc<$Description, $.Cardinality.Many, {}, true, false,  false, false>;
  "active": $.PropertyDesc<_std.$bool, $.Cardinality.AtMostOne, false, false, false, true>;
  "employer": $.PropertyDesc<_std.$str, $.Cardinality.AtMostOne, false, false, false, false>;
  "position": $.PropertyDesc<_std.$str, $.Cardinality.AtMostOne, false, false, false, false>;
  "priority": $.PropertyDesc<_std.$int32, $.Cardinality.AtMostOne, false, false, false, false>;
  "time": $.PropertyDesc<_std.$str, $.Cardinality.AtMostOne, false, false, false, false>;
}>;
type $Experience = $.ObjectType<"default::Experience", $ExperienceλShape, null, [
  ..._std.$Object_68791e22679111ed89064d2d8ee0faf5['__exclusives__'],
  {descriptions: {__element__: $Description, __cardinality__: $.Cardinality.One | $.Cardinality.AtMostOne },},
]>;
const $Experience = $.makeType<$Experience>(_.spec, "d38184b4-d174-11ed-9561-bbc44504871f", _.syntax.literal);

const Experience: $.$expr_PathNode<$.TypeSet<$Experience, $.Cardinality.Many>, null> = _.syntax.$PathNode($.$toSet($Experience, $.Cardinality.Many), null);

export type $InviteλShape = $.typeutil.flatten<_std.$Object_68791e22679111ed89064d2d8ee0faf5λShape & {
  "email": $.PropertyDesc<_std.$str, $.Cardinality.One, false, false, false, false>;
  "registered": $.PropertyDesc<_std.$bool, $.Cardinality.One, false, false, false, true>;
  "key": $.PropertyDesc<_std.$str, $.Cardinality.One, false, false, false, false>;
  "<invite[is User]": $.LinkDesc<$User, $.Cardinality.Many, {}, false, false,  false, false>;
  "<invite": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false,  false, false>;
}>;
type $Invite = $.ObjectType<"default::Invite", $InviteλShape, null, [
  ..._std.$Object_68791e22679111ed89064d2d8ee0faf5['__exclusives__'],
]>;
const $Invite = $.makeType<$Invite>(_.spec, "d8d653b8-d174-11ed-b536-8374178b15d7", _.syntax.literal);

const Invite: $.$expr_PathNode<$.TypeSet<$Invite, $.Cardinality.Many>, null> = _.syntax.$PathNode($.$toSet($Invite, $.Cardinality.Many), null);

export type $SnapshotλShape = $.typeutil.flatten<_std.$Object_68791e22679111ed89064d2d8ee0faf5λShape & {
  "createdAt": $.PropertyDesc<_std.$datetime, $.Cardinality.One, false, false, false, true>;
  "data": $.PropertyDesc<_std.$json, $.Cardinality.One, false, false, false, false>;
}>;
type $Snapshot = $.ObjectType<"default::Snapshot", $SnapshotλShape, null, [
  ..._std.$Object_68791e22679111ed89064d2d8ee0faf5['__exclusives__'],
]>;
const $Snapshot = $.makeType<$Snapshot>(_.spec, "20acc556-0bc6-11ee-8549-a75f5207cab7", _.syntax.literal);

const Snapshot: $.$expr_PathNode<$.TypeSet<$Snapshot, $.Cardinality.Many>, null> = _.syntax.$PathNode($.$toSet($Snapshot, $.Cardinality.Many), null);

export type $TechStackλShape = $.typeutil.flatten<_std.$Object_68791e22679111ed89064d2d8ee0faf5λShape & {
  "stack": $.PropertyDesc<_std.$str, $.Cardinality.One, true, false, false, false>;
  "<stack[is Technology]": $.LinkDesc<$Technology, $.Cardinality.Many, {}, false, false,  false, false>;
  "<stack": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false,  false, false>;
}>;
type $TechStack = $.ObjectType<"default::TechStack", $TechStackλShape, null, [
  ..._std.$Object_68791e22679111ed89064d2d8ee0faf5['__exclusives__'],
  {stack: {__element__: _std.$str, __cardinality__: $.Cardinality.One | $.Cardinality.AtMostOne },},
]>;
const $TechStack = $.makeType<$TechStack>(_.spec, "d371dcbc-d174-11ed-9bc1-81b00a849244", _.syntax.literal);

const TechStack: $.$expr_PathNode<$.TypeSet<$TechStack, $.Cardinality.Many>, null> = _.syntax.$PathNode($.$toSet($TechStack, $.Cardinality.Many), null);

export type $TechnologyλShape = $.typeutil.flatten<_std.$Object_68791e22679111ed89064d2d8ee0faf5λShape & {
  "stack": $.LinkDesc<$TechStack, $.Cardinality.AtMostOne, {}, false, false,  false, false>;
  "priority": $.PropertyDesc<_std.$int32, $.Cardinality.AtMostOne, false, false, false, false>;
  "url": $.PropertyDesc<_std.$str, $.Cardinality.AtMostOne, false, false, false, false>;
  "name": $.PropertyDesc<_std.$str, $.Cardinality.AtMostOne, true, false, false, false>;
  "<technologies[is Application]": $.LinkDesc<$Application, $.Cardinality.Many, {}, false, false,  false, false>;
  "<technologies": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false,  false, false>;
}>;
type $Technology = $.ObjectType<"default::Technology", $TechnologyλShape, null, [
  ..._std.$Object_68791e22679111ed89064d2d8ee0faf5['__exclusives__'],
  {name: {__element__: _std.$str, __cardinality__: $.Cardinality.One | $.Cardinality.AtMostOne },},
]>;
const $Technology = $.makeType<$Technology>(_.spec, "d375d182-d174-11ed-9599-6d59e2f4fa3b", _.syntax.literal);

const Technology: $.$expr_PathNode<$.TypeSet<$Technology, $.Cardinality.Many>, null> = _.syntax.$PathNode($.$toSet($Technology, $.Cardinality.Many), null);

export type $UserλShape = $.typeutil.flatten<_std.$Object_68791e22679111ed89064d2d8ee0faf5λShape & {
  "invite": $.LinkDesc<$Invite, $.Cardinality.AtMostOne, {}, false, false,  false, false>;
  "email": $.PropertyDesc<_std.$str, $.Cardinality.One, true, false, false, false>;
  "hash": $.PropertyDesc<_std.$str, $.Cardinality.One, false, false, false, false>;
  "name": $.PropertyDesc<_std.$str, $.Cardinality.AtMostOne, false, false, false, false>;
  "salt": $.PropertyDesc<_std.$str, $.Cardinality.One, false, false, false, false>;
  "username": $.PropertyDesc<_std.$str, $.Cardinality.One, true, false, false, false>;
}>;
type $User = $.ObjectType<"default::User", $UserλShape, null, [
  ..._std.$Object_68791e22679111ed89064d2d8ee0faf5['__exclusives__'],
  {username: {__element__: _std.$str, __cardinality__: $.Cardinality.One | $.Cardinality.AtMostOne },},
  {email: {__element__: _std.$str, __cardinality__: $.Cardinality.One | $.Cardinality.AtMostOne },},
]>;
const $User = $.makeType<$User>(_.spec, "d981f2ea-d174-11ed-868f-8da8a218d503", _.syntax.literal);

const User: $.$expr_PathNode<$.TypeSet<$User, $.Cardinality.Many>, null> = _.syntax.$PathNode($.$toSet($User, $.Cardinality.Many), null);



export { $Application, Application, $Description, Description, $Education, Education, $Experience, Experience, $Invite, Invite, $Snapshot, Snapshot, $TechStack, TechStack, $Technology, Technology, $User, User };

type __defaultExports = {
  "Application": typeof Application;
  "Description": typeof Description;
  "Education": typeof Education;
  "Experience": typeof Experience;
  "Invite": typeof Invite;
  "Snapshot": typeof Snapshot;
  "TechStack": typeof TechStack;
  "Technology": typeof Technology;
  "User": typeof User
};
const __defaultExports: __defaultExports = {
  "Application": Application,
  "Description": Description,
  "Education": Education,
  "Experience": Experience,
  "Invite": Invite,
  "Snapshot": Snapshot,
  "TechStack": TechStack,
  "Technology": Technology,
  "User": User
};
export default __defaultExports;
