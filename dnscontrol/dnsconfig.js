// @ts-check
/// <reference types="./types-dnscontrol" />

D("yeoruc.blog", NewRegistrar("none"), DnsProvider(NewDnsProvider("porkbun")),
    A("@", "216.198.79.1"),
);
