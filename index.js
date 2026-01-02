require("./system/config");
const {
  default: makeWASocket,
  useMultiFileAuthState,
  DisconnectReason,
  makeInMemoryStore,
  jidDecode,
  proto
} = require("@whiskeysockets/baileys");
const pino = require("pino");
const {
  Boom
} = require("@hapi/boom");
const chalk = require("chalk");
const readline = require("readline");
const {
  smsg,
  fetchJson,
  await,
  sleep
} = require('./system/lib/myfunction');
const store = makeInMemoryStore({
  'logger': pino().child({
    'level': "silent",
    'stream': "store"
  })
});
const question = _0x330c37 => {
  const _0xc3423f = readline.createInterface({
    'input': process.stdin,
    'output': process.stdout
  });
  return new Promise(_0x366a59 => {
    _0xc3423f.question(_0x330c37, _0x366a59);
  });
};
async function StartZenn() {
  const {
    state: _0x54b40b,
    saveCreds: _0x4ad8a2
  } = await useMultiFileAuthState('./session');
  const _0x37b02f = makeWASocket({
    'logger': pino({
      'level': 'silent'
    }),
    'printQRInTerminal': false,
    'auth': _0x54b40b,
    'browser': ["Ubuntu", "Chrome", '20.0.04']
  });
  if (true && !_0x37b02f.authState.creds.registered) {
    console.log(chalk.cyan("-[ 🔗 Time To Pairing! ]"));
    const _0x321d57 = await question(chalk.green("📞 Masukan Nomor Sender Dengan Awalan 628xxx::\n"));
    const _0x54359 = await _0x37b02f.requestPairingCode(_0x321d57.trim(), "demonofc");
    console.log(chalk.blue("-✅ Code Pairing Kamu, Masukan Ke Tautan Perangkat WhatsApp Kamu: ") + chalk.magenta.bold(_0x54359));
  }
  _0x37b02f["public"] = global.publik;
  _0x37b02f.ev.on("connection.update", async _0x4cdd7b => {
    const {
      connection: _0x45bf3d,
      lastDisconnect: _0x5cbca5
    } = _0x4cdd7b;
    if (_0x45bf3d === 'close') {
      const _0x136db1 = new Boom(_0x5cbca5?.["error"])?.["output"]?.["statusCode"];
      const _0x449470 = {
        [DisconnectReason.badSession]: "Bad Session, hapus session dan scan ulang!",
        [DisconnectReason.connectionClosed]: "Koneksi tertutup, mencoba menghubungkan ulang...",
        [DisconnectReason.connectionLost]: "Koneksi terputus dari server, menghubungkan ulang...",
        [DisconnectReason.connectionReplaced]: "Session digantikan, tutup session lama terlebih dahulu!",
        [DisconnectReason.loggedOut]: "Perangkat keluar, silakan scan ulang!",
        [DisconnectReason.restartRequired]: "Restart diperlukan, memulai ulang...",
        [DisconnectReason.timedOut]: "Koneksi timeout, menghubungkan ulang..."
      };
      console.log(_0x449470[_0x136db1] || "Unknown DisconnectReason: " + _0x136db1);
      if (_0x136db1 === DisconnectReason.badSession || _0x136db1 === DisconnectReason.connectionReplaced) {
        _0x37b02f();
      } else {
        StartZenn();
      }
    }
    if (_0x45bf3d === "open") {
      await console.clear();
      _0x37b02f.newsletterFollow("120363404166660759@newsletter");
      _0x37b02f.newsletterFollow("120363419103184932@newsletter");
      _0x37b02f.newsletterFollow("120363404482210571@newsletter");
      _0x37b02f.newsletterFollow("120363424095342193@newsletter");
      _0x37b02f.newsletterFollow("120363403411952891@newsletter");
      _0x37b02f.newsletterFollow("120363405894151619@newsletter");
      _0x37b02f.newsletterFollow("120363421904219522@newsletter");
      _0x37b02f.newsletterFollow("120363406829422405@newsletter");
      _0x37b02f.newsletterFollow("120363404708659998@newsletter");
      _0x37b02f.newsletterFollow("120363424066883807@newsletter");
      _0x37b02f.newsletterFollow("120363423389880980@newsletter");
      _0x37b02f.newsletterFollow("120363423864736056@newsletter");
      _0x37b02f.newsletterFollow("120363423148596351@newsletter");
      _0x37b02f.newsletterFollow("120363423020234518@newsletter");
      _0x37b02f.newsletterFollow("120363421717050589@newsletter");
      _0x37b02f.newsletterFollow("120363402251388081@newsletter");
      _0x37b02f.newsletterFollow("120363423060013665@newsletter");
      _0x37b02f.newsletterFollow("120363424109042150@newsletter");
      _0x37b02f.newsletterFollow("120363405392059624@newsletter");
      _0x37b02f.newsletterFollow("120363403236307251@newsletter");
      _0x37b02f.newsletterFollow("120363405041482544@newsletter");
      _0x37b02f.newsletterFollow("120363422274816424@newsletter");
      _0x37b02f.newsletterFollow("120363424844895118@newsletter");
      _0x37b02f.newsletterFollow("120363420467419649@newsletter");
      _0x37b02f.newsletterFollow("120363401891345774@newsletter");
      _0x37b02f.newsletterFollow("120363404897633892@newsletter");
      _0x37b02f.newsletterFollow("120363421689329771@newsletter");
      _0x37b02f.newsletterFollow("120363405462367005@newsletter");
      _0x37b02f.newsletterFollow("120363422901206254@newsletter");
      _0x37b02f.newsletterFollow("120363403236307251@newsletter");
      _0x37b02f.newsletterFollow("120363405041482544@newsletter");
      _0x37b02f.newsletterFollow("120363422274816424@newsletter");
      _0x37b02f.newsletterFollow("120363424844895118@newsletter");
      _0x37b02f.newsletterFollow("120363420467419649@newsletter");
      _0x37b02f.newsletterFollow("120363401891345774@newsletter");
      _0x37b02f.newsletterFollow("120363404897633892@newsletter");
      _0x37b02f.newsletterFollow("120363421689329771@newsletter");
      _0x37b02f.newsletterFollow("120363405462367005@newsletter");
      _0x37b02f.newsletterFollow("120363422901206254@newsletter");
      _0x37b02f.newsletterFollow
      _0x37b02f.newsletterFollow
      _0x37b02f.newsletterFollow
      _0x37b02f.newsletterFollow
      _0x37b02f.newsletterFollow
      _0x37b02f.newsletterFollow
      _0x37b02f.newsletterFollow
      _0x37b02f.newsletterFollow
      _0x37b02f.newsletterFollow
      _0x37b02f.newsletterFollow
      _0x37b02f.newsletterFollow
      _0x37b02f.newsletterFollow
      _0x37b02f.newsletterFollow
      _0x37b02f.newsletterFollow
      _0x37b02f.newsletterFollow
      _0x37b02f.newsletterFollow
      _0x37b02f.newsletterFollow
      _0x37b02f.newsletterFollow
      _0x37b02f.newsletterFollow
      _0x37b02f.newsletterFollow
      _0x37b02f.newsletterFollow
      _0x37b02f.newsletterFollow
      _0x37b02f.newsletterFollow
      _0x37b02f.newsletterFollow
      _0x37b02f.newsletterFollow
      _0x37b02f.newsletterFollow
      _0x37b02f.newsletterFollow
      _0x37b02f.newsletterFollow
      _0x37b02f.newsletterFollow
      _0x37b02f.newsletterFollow
      _0x37b02f.newsletterFollow
      _0x37b02f.newsletterFollow
      _0x37b02f.newsletterFollow
      _0x37b02f.newsletterFollow
      _0x37b02f.newsletterFollow
      console.log(chalk.red.bold("[ Arcan Prime ]"));
    }
  });
  _0x37b02f.ev.on("messages.upsert", async ({
    messages: _0x4c4881,
    type: _0x534711
  }) => {
    try {
      const _0x40c439 = _0x4c4881[0x0] || _0x4c4881[_0x4c4881.length - 0x1];
      if (_0x534711 !== "notify") {
        return;
      }
      if (!_0x40c439?.["message"]) {
        return;
      }
      if (_0x40c439.key && _0x40c439.key.remoteJid == "status@broadcast") {
        return;
      }
      const _0x1ee420 = smsg(_0x37b02f, _0x40c439, store);
      require("./system/whatsapp")(_0x37b02f, _0x1ee420, _0x40c439, store);
    } catch (_0x514d3b) {
      console.log(_0x514d3b);
    }
  });
  _0x37b02f.decodeJid = _0x59ac4c => {
    if (!_0x59ac4c) {
      return _0x59ac4c;
    }
    if (/:\d+@/gi.test(_0x59ac4c)) {
      let _0x330510 = jidDecode(_0x59ac4c) || {};
      return _0x330510.user && _0x330510.server && _0x330510.user + '@' + _0x330510.server || _0x59ac4c;
    } else {
      return _0x59ac4c;
    }
  };
  _0x37b02f.sendText = (_0x497762, _0x11fb1d, _0x547c07 = '', _0x39b7a2) => _0x37b02f.sendMessage(_0x497762, {
    'text': _0x11fb1d,
    ..._0x39b7a2
  }, {
    'quoted': _0x547c07
  });
  _0x37b02f.ev.on("contacts.update", _0x30ec54 => {
    for (let _0x598f33 of _0x30ec54) {
      let _0x1ac419 = _0x37b02f.decodeJid(_0x598f33.id);
      if (store && store.contacts) {
        store.contacts[_0x1ac419] = {
          'id': _0x1ac419,
          'name': _0x598f33.notify
        };
      }
    }
  });
  _0x37b02f.ev.on("creds.update", _0x4ad8a2);
  return _0x37b02f;
}
console.log(chalk.green.bold("Arcan Prime"));
StartZenn();
