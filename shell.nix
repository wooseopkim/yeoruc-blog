let
  nixpkgs = import <nixpkgs> {};
  inherit (nixpkgs) pkgs;
in
with pkgs;
mkShellNoCC {
  packages = [
    nodejs
  ];
}