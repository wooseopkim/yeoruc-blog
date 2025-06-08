let
  nixpkgs = import <nixpkgs> {};
  inherit (nixpkgs) pkgs;
in
with pkgs;
mkShellNoCC {
  packages = [
    nodejs
    dnscontrol
    sops
    age
  ];

  shellHook = ''
    dnscontrol write-types -o ./dnscontrol/types-dnscontrol.d.ts
  '';
}