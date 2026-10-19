-- Migration aditiva para controle de envio do PDF bônus (Kit de Avaliação Funcional)

DO $$ 
BEGIN
    IF EXISTS (
        SELECT FROM information_schema.tables 
        WHERE table_schema = 'public' 
        AND table_name = 'profiles'
    ) THEN
        ALTER TABLE profiles ADD COLUMN IF NOT EXISTS bonus_pdf_sent_at TIMESTAMP WITH TIME ZONE NULL;
    END IF;

    IF EXISTS (
        SELECT FROM information_schema.tables 
        WHERE table_schema = 'public' 
        AND table_name = 'users'
    ) THEN
        ALTER TABLE users ADD COLUMN IF NOT EXISTS bonus_pdf_sent_at TIMESTAMP WITH TIME ZONE NULL;
    END IF;
END $$;

-- Tabela para persistência de erros no envio do bônus (para reenvio manual)
CREATE TABLE IF NOT EXISTS bonus_dispatch_errors (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    payment_id TEXT,
    customer_id TEXT,
    user_id TEXT,
    user_email TEXT,
    error_message TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
