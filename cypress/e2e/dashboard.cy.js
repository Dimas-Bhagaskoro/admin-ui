describe('Skenario End to End Test - Dashboard Overview', () => {
  it('Harus sukses melakukan login dan menampilkan komponen dashboard overview', () => {
    // 1. Mengakses halaman login aplikasi Finebank
    cy.visit('/login');

    // 2. Mengisi form login sesuai kredensial akun mahasiswa
    cy.get('input[name="email"]').type('mahasiswa@mhs.dinus.ac.id');
    cy.get('input[name="password"]').type('password123');

    // 3. Menekan tombol masuk
    cy.get('button[type="submit"]').click();

    // 4. Sistem berhasil melakukan autentikasi dan mengarahkan ke dashboard
    cy.url().should('include', '/overview');

    // 5. Memastikan komponen Card Upcoming Bill yang baru diintegrasikan backend berhasil muncul
    cy.get('.card-upcoming-bill').should('be.visible');
    cy.contains('Upcoming Bill').should('exist');
  });
});